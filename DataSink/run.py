from app import app


app.run(host=app.config['HOST'],port=int(app.config['PORT']),debug='True')
