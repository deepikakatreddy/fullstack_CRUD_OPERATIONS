import sqlite3

DATABASE = 'database.db'

def get_db_connection():
    conn = sqlite3.connect(DATABASE)
    return conn

def create_user_table():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name TEXT NOT NULL,
            last_name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

def init_db():
    create_user_table()

def add_user(first_name, last_name, email, password):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO users (first_name, last_name, email, password)
        VALUES (?, ?, ?, ?)
    ''', (first_name, last_name, email, password))
    conn.commit()
    user_id = cursor.lastrowid
    conn.close()
    return user_id

def get_all_users():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM users')
    rows = cursor.fetchall()
    conn.close()
    users = [
        {'id': row[0], 'first_name': row[1], 'last_name': row[2], 'email': row[3]}
        for row in rows
    ]
    return users

def get_user_by_id(user_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM users WHERE id = ?', (user_id,))
    row = cursor.fetchone()
    conn.close()
    if row:
        return {'id': row[0], 'first_name': row[1], 'last_name': row[2], 'email': row[3]}
    return None

def update_user(user_id, data):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('''
        UPDATE users SET first_name = ?, last_name = ?, email = ?, password = ?
        WHERE id = ?
    ''', (data['first_name'], data['last_name'], data['email'], data['password'], user_id))
    conn.commit()
    updated = cursor.rowcount
    conn.close()
    return updated

def delete_user(user_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('DELETE FROM users WHERE id = ?', (user_id,))
    conn.commit()
    deleted = cursor.rowcount
    conn.close()
    return deleted
