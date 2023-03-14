# Create a new file called "example.txt" in write mode
file = open("example.txt", "w")

# Close the file
file.close()


from flask import Flask, send_file

app = Flask(__name__)

@app.route('/file')
def send_file():
    return send_file('example.txt', as_attachment=True)

def search_word(word, filename):
    with open(filename) as file:
        lines = file.readlines()
        for i, line in enumerate(lines):
            if word in line:
                print(f"{word} found in line {i+1}")
search_word("apple", "fruits.txt")
