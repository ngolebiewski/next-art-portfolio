import os
from pyfiglet import Figlet

def make_word_art(word, font="larry3d", width=120):
    f = Figlet(font=font, width=width)
    ascii_art = f.renderText(word)
    return ascii_art
    
def save_to_file(ascii_art, filename="output.txt"):
    # Ensure the folder exists
    os.makedirs('ascii_text', exist_ok=True)
    
    # Write the ASCII art to a text file
    with open(f'ascii_text/{filename}.txt', 'w') as file:
        file.write(ascii_art)
    print(f"ASCII art saved to 'ascii_text/{filename}.txt'")

def main():
    word = input("Word(s) to Ascii-fy: ")
    font = "larry3d"
    # choose_font = input("Customize font? (y/n)")
    # if choose_font.lower().strip().startswith("y"):
    #     font = input("font: ")
    ascii_art = make_word_art(word, font)
    print(ascii_art)
    filename = word.strip().replace(" ", "-")
    save_to_file(ascii_art, filename)
    
  
if __name__ == "__main__":
    main()