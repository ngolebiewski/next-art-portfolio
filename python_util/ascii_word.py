import os
from pyfiglet import Figlet
from PIL import Image, ImageDraw, ImageFont

def make_word_art(word, font="larry3d", width=120):
    f = Figlet(font=font, width=width)
    ascii_art = f.renderText(word)
    return ascii_art

def save_to_file(ascii_art, filename="output.txt"):
    os.makedirs('ascii_text', exist_ok=True)
    with open(f'ascii_text/{filename}.txt', 'w') as file:
        file.write(ascii_art)
    print(f"ASCII art saved to 'ascii_text/{filename}.txt'")

def save_to_png(ascii_art, filename="output.png", font_size=16):
    lines = ascii_art.split('\n')
    line_width = max(len(line) for line in lines)

    img_font = None
    try:
     # Path to SF Mono on macOS
        sf_mono_path = "/System/Library/Fonts/SFMono-Regular.otf"
        img_font = ImageFont.truetype(sf_mono_path, font_size)
        print("SF Mono font loaded.")
    except OSError:
        try:
            img_font = ImageFont.truetype("courier.ttf", font_size)
            print("lowercase courier TrueType font loaded.")#add this line
        except OSError:
            img_font = ImageFont.load_default()
            print("Default font loaded.") #add this line
    try:
        # Get the bounding box of a single character to determine accurate dimensions.
        char_width, char_height = img_font.getsize('A') #using 'A' as a standard character.

        # Add a little extra vertical padding to ensure no clipping
        char_height += 2
    except AttributeError: 
        char_width, char_height = 10, 10

    image_width = int(line_width * char_width * 5)
    image_height = int(len(lines) * char_height * 5)

    img = Image.new('RGB', (image_width, image_height), color='black')
    draw = ImageDraw.Draw(img)

    y_offset = 0
    for line in lines:
        draw.text((0, y_offset), line, fill=(0, 255, 0), font=img_font)
        y_offset += char_height

    img.save(f'ascii_text/{filename}.png')
    print(f"ASCII art saved to 'ascii_text/{filename}.png'")

def main():
    word = input("Word(s) to Ascii-fy: ")
    font = "larry3d"
    choose_font = input("Customize font? (y/n)")
    if choose_font.lower().strip().startswith("y"):
        font = input("font: ")
    ascii_art = make_word_art(word, font)
    print(ascii_art)
    filename = word.strip().replace(" ", "-")
    save_to_file(ascii_art, filename)
    save_to_png(ascii_art, filename)

if __name__ == "__main__":
    main()