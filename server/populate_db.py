import sqlite3
import os

DATABASE = 'database.db'  # Replace with your database file

def insert_images():
    images_folder = os.path.join(os.path.dirname(__file__), 'img')

    image_filenames = [
        'about.jpg', 'about2.jpg', 'img1.jpg', 'img2.jpg', 'img3.jpg',
        'img3 (2).jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img6 (2).jpg',
        'img7.jpg', 'img8.jpg', 'img9.jpg', 'img10.jpg', 'img11.jpg',
        'img12.jpg', 'img13.jpg', 'img14.jpg', 'img15.jpg', 'img16.jpg',
        'img17.jpg', 'img18.jpg', 'img19.jpg', 'img20.jpg', 'img21.jpg',
        'img22.jpg', 'img23.jpg', 'img24.jpg', 'img25.jpg', 'img26.jpg',
        'img27.jpg', 'img28.jpg', 'img29.jpg', 'img30.jpg', 'img31.jpg',
        'img32.jpg', 'img33.jpg', 'img34.jpg', 'img35.jpg', 'img36.jpg',
        'img37.jpg', 'img38.jpg', 'img39.png', 'img40.jpg', 'img41.jpg',
        'img42.png', 'img43.png',
    ]

    image_paths = [os.path.join(images_folder, filename) for filename in image_filenames]

    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()

    try:
        cursor.executemany('INSERT INTO images (path) VALUES (?)', [(os.path.basename(path),) for path in image_paths])
        conn.commit()
    except sqlite3.Error as e:
        print(f"Error inserting images: {e}")
    finally:
        conn.close()

def insert_services():
    services = [
        ("Survey, Design & CAD Drawings", 
         "Lenatech provides expert Survey, Design, and CAD Drawing services, crucial for the successful execution of any construction or engineering project. Our process begins with thorough site surveys, where our skilled professionals use advanced equipment to collect accurate data on topography, boundaries, and existing structures. This information is then analyzed to create detailed design plans.\n\nOur design phase involves close collaboration with clients to understand their vision and requirements. Using state-of-the-art CAD (Computer-Aided Design) software, we develop precise and comprehensive drawings that detail every aspect of the project. These CAD drawings include architectural plans, structural schematics, and detailed layouts, ensuring all project elements are accurately represented.\n\nThe CAD drawings we produce are essential for obtaining permits, guiding construction, and facilitating clear communication among stakeholders. Our commitment to precision and clarity ensures that designs are not only functional but also meet the highest standards of quality and regulatory compliance.", 
         "architectural.png", 
         "Drawings.jpg"),

        ("Civil and Building Works", 
         "Lenatech excels in delivering high-quality civil and building works across a range of projects. Our services cover all aspects of civil engineering and construction, including site preparation, foundation work, structural building, and finishing. We are dedicated to meeting deadlines, staying within budget, and adhering to stringent safety and environmental regulations.\n\nOur team is skilled in handling complex projects and ensures that every detail is executed to the highest standards. We prioritize effective communication and collaboration with clients to achieve their vision while maintaining the highest levels of quality and service. Our project management team oversees every phase of the construction process, coordinating with subcontractors, suppliers, and clients to ensure smooth execution. We employ rigorous quality control measures and adhere to best practices in construction to achieve outstanding results and client satisfaction.", 
         "construction.png", 
         "Construction.jpg"),

        ("Tower Erection", 
         "Since 2005, Lenatech has been a leader in GSM Tower Erection services. Our expertise encompasses all aspects of tower erection, including site evaluation, structural assembly, and the installation of communication equipment. We handle both new installations and the maintenance or upgrading of existing towers, offering solutions tailored to the specific needs of our clients.\n\nWe prioritize safety and quality in every tower erection project. Our team follows stringent safety protocols and industry standards to ensure the structural integrity and operational reliability of each tower. Our services include site preparation, foundation work, tower assembly, and equipment installation, ensuring that each project is completed efficiently and to the highest standards. We also offer ongoing support and maintenance to ensure the long-term performance of the towers.", 
         "cell-tower.png", 
         "Tower.jpg"),

        ("Electrical Installation & Solar PV Installation", 
         "Lenatech’s Electrical Installation and Solar PV Installation services are designed to meet the evolving needs of modern infrastructure. Our electrical installation services cover a wide range of applications, including residential, commercial, and industrial projects. We handle power distribution systems, lighting, control systems, and electrical panel installations, ensuring all work complies with safety regulations and electrical codes.\n\nIn addition to traditional electrical services, we specialize in Solar PV (Photovoltaic) installations, offering sustainable energy solutions that help clients reduce their energy costs and environmental impact. Our solar PV services include system design, component selection, installation, and maintenance. We use advanced technology and best practices to optimize system performance and efficiency. Our team is dedicated to providing reliable and innovative solutions, ensuring that all electrical and solar installations are completed to the highest standards of quality and performance.", 
         "electrical-panel.png", 
         "ElectricalInstallations.jpg"),

        ("Steel Structures", 
         "Lenatech offers comprehensive services for Steel Structures, from initial design and engineering to fabrication and installation. We specialize in the creation of robust and durable steel structures for a variety of applications, including industrial facilities, commercial buildings, and specialized projects.\n\nOur services include structural design, material procurement, fabrication, and on-site assembly. We use advanced engineering software and fabrication techniques to ensure precision and quality in every steel component. Our steel structures are designed to meet the highest standards of strength, stability, and aesthetic appeal. We work closely with clients to understand their specific requirements and provide tailored solutions that meet their needs. Our team is committed to delivering projects on time, within budget, and to the highest standards of safety and quality.", 
         "steel-beam.png", 
         "SteelStructures.jpg")
    ]

    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()

    try:
        cursor.executemany('INSERT INTO services (title, description, icon, image) VALUES (?, ?, ?, ?)', services)
        conn.commit()
    except sqlite3.Error as e:
        print(f"Error inserting services: {e}")
    finally:
        conn.close()

def insert_projects():
    projects = [
        ("Avcon Contractors Ltd", "Sept 2022-To Date", "BTS sites Build", "Levis Ochieng 0722937696"),
        ("Passive Engineering Ltd", "Sept 2021-2022", "BTS sites Build & Fabrication", "Lawrence Githome 0722444735"),
        ("Waindo John", "April 2008-2022", "Construction of Residential Building", "John Kiarie 0722224308"),
        ("Tesla Services Ltd", "April 2008-2021", "BTS sites Build & Fabrication", "James Mutahi 0721738594"),
        ("Safaricom PLC", "April 2018- 2020", "BTS Rollout Services", "Robert Koech 0722720374"),
        ("Safaricom PLC", "April 2018-to 2020", "Optimization Services", "George Adeka 0720676910"),
        ("Ascom Networks Ltd.", "Feb 2008 – 2021", "BTS sites Build & Fabrication", "Paul Gitiche 0722804559"),
        ("F. M Maguah", "Feb 2019-2020", "Construction of Residential Building", "Francis Mburu 0722363283"),
        ("Linksoft Limited.", "Jan 2015-2018", "BTS Rollout Services", "Kevin Wainaina 0721412593"),
        ("Alan Dick (E. A) Ltd", "Jan 2009-2018", "BTS Rollout Services", "Willis Ochieng 0722 540984")
    ]

    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()

    try:
        cursor.executemany('INSERT INTO projects (client_name, date, description, contact) VALUES (?, ?, ?, ?)', projects)
        conn.commit()
    except sqlite3.Error as e:
        print(f"Error inserting projects: {e}")
    finally:
        conn.close()

if __name__ == "__main__":
    insert_images()
    insert_services()
    insert_projects()
