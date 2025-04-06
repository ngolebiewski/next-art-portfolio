import os
import requests
import time
import random

'''
I don't want to search around for all of the image files for my artwork. Kind of the motivation for adding them all to a database at long last!
However, I have uploaded many of my key images to Etsy over the years. Therefore, until I find all of these original files, I'll grab and use those Etsy ones.
When you do a data download, you DON'T get the images (Yo Etsy, why not?) just the urls.
So, here is a way to download them all.
However, I made a SQLITE database out of the csv download from Etsy. 
It feels easier to SQL query the data, than using a spreadsheet program, which I can't stand!

# SQLITE commands to output a list of image urls from Etsy from your data download and converting it to a sqlite database.

.headers off
.mode list     -- or try .mode csv or .mode tabs
.output etsy_image.txt
SELECT IMAGE1 FROM LISTINGS;
.output stdout
'''

# Path to your text file of image URLs
image_list_file = "social_data/etsy/etsy_image.txt"

# Directory to save the images
save_directory = "etsy_downloaded_images"

# Create the directory if it doesn't exist
if not os.path.exists(save_directory):
    os.makedirs(save_directory)

# Read image URLs from the file
with open(image_list_file, "r") as f:
    image_urls = [line.strip() for line in f if line.strip()]

# Function to download the image
def download_image(url, save_path):
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        with open(save_path, "wb") as f:
            f.write(response.content)
        print(f"✅ Image saved: {save_path}")
    except requests.exceptions.RequestException as e:
        print(f"❌ Failed to download {url}: {e}")

# Download each image with a random pause in between
for url in image_urls:
    image_name = url.split("/")[-1]
    save_path = os.path.join(save_directory, image_name)
    download_image(url, save_path)

    # Random delay between 0.5 and 2 seconds
    delay = random.uniform(0.5, 2.0)
    print(f"⏳ Waiting {delay:.2f} seconds before next download...")
    time.sleep(delay)
