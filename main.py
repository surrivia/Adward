import eel
import os

eel.init('Front\index.html')

os.system('start msedge.exe --app="http://localhost:3000/index.html"')
eel.start('index.html', mode=None, host='localhost', block=True)   