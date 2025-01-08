from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Image(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    path = db.Column(db.String(255), nullable=False)

class Service(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    icon = db.Column(db.String(255), nullable=False) 
    image = db.Column(db.String(255), nullable=False) 
    
class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.String(50), nullable=False)
    description = db.Column(db.Text, nullable=False)
    client_name = db.Column(db.String(255), nullable=False)
    contact = db.Column(db.String(50), nullable=False)
