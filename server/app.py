from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
import sqlite3
import os

app = Flask(__name__)
CORS(app)

DATABASE = 'database.db'

def get_db_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/api/images', methods=['GET'])
def get_images():
    try:
        conn = get_db_connection()
        images = conn.execute('SELECT * FROM images').fetchall()
        conn.close()
        return jsonify([dict(image) for image in images])
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/services', methods=['GET'])
def get_services():
    try:
        conn = get_db_connection()
        services = conn.execute('SELECT * FROM services').fetchall()
        conn.close()
        return jsonify([dict(service) for service in services])
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/projects', methods=['GET'])
def get_projects():
    try:
        conn = get_db_connection()
        projects = conn.execute('SELECT * FROM projects').fetchall()
        conn.close()
        return jsonify([dict(project) for project in projects])
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/img/<path:filename>')
def serve_image(filename):
    img_folder = os.path.join(app.root_path, 'img')
    return send_from_directory(img_folder, filename)

@app.route('/icons/<path:filename>')
def serve_icon(filename):
    icon_folder = os.path.join(app.root_path, 'icons')
    return send_from_directory(icon_folder, filename)

@app.route('/api/add_service', methods=['POST'])
def add_service():
    try:
        new_service = request.json
        title = new_service.get('title')
        description = new_service.get('description')
        icon = new_service.get('icon')
        image = new_service.get('image')

        if not title or not description or not icon or not image:
            return jsonify({'error': 'Title, Description, Icon, and Image are required'}), 400

        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute(
            'INSERT INTO services (title, description, icon, image) VALUES (?, ?, ?, ?)',
            (title, description, icon, image)
        )
        conn.commit()
        conn.close()

        return jsonify({'message': 'Service added successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/add_project', methods=['POST'])
def add_project():
    try:
        new_project = request.json
        client_name = new_project.get('client_name')
        date = new_project.get('date')
        description = new_project.get('description')
        contact = new_project.get('contact')

        if not client_name or not date or not description or not contact:
            return jsonify({'error': 'All fields are required'}), 400

        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute(
            'INSERT INTO projects (client_name, date, description, contact) VALUES (?, ?, ?, ?)',
            (client_name, date, description, contact)
        )
        conn.commit()
        conn.close()

        return jsonify({'message': 'Project added successfully'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
