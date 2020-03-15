# -*- coding: utf-8 -*-

from flask import Flask, request
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

app = Flask(__name__)
limiter = Limiter(app, key_func=get_remote_address)


@app.route('/v1/transpile/', methods=['POST'])
@limiter.limit('1 per 2 seconds')
def transpile_and_run_code():
    import subprocess
    import os

    # Gets and prepares the source code
    raw_data = request.form['code']
    raw_data = raw_data.replace('\r', '')
    if len(raw_data) >= 50000:
        return 'Error! Maxlängd är 50000 tecken!'

    raw_data = raw_data.split('\n')

    data = []

    for line in raw_data:
        data.append(line + '\n')

    # Writes the provided (enkelt) source code to a temporary file
    with open('tmp.e', 'w+') as f:
        f.writelines(data)

    # Runs code, captures output & errors
    process = subprocess.Popen(['python', 'enkelt.py', 'tmp.e'], stdout=subprocess.PIPE)
    out, err = process.communicate()

    # Removes temprary file
    os.remove('tmp.e')

    if err:
        return err

    return out


if __name__ == '__main__':
    app.run()
