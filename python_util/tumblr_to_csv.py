import os
import csv
import re
from bs4 import BeautifulSoup
from datetime import datetime

# Paths
BASE_DIR = "social_data/tumblr/tumblr_data"
HTML_DIR = os.path.join(BASE_DIR, "posts")
INDEX_FILE = os.path.join(BASE_DIR, "posts/posts_index.html")
MEDIA_DIR = "media/"  # Relative to BASE_DIR
OUTPUT_CSV = "tumblr_artwork.csv"

# Fixed values
SERIES = "Drawing-a-Day"
SOURCE = "tumblr"
ETSY_URL = None
TYPE = "NLBS"
MEDIUMS = "sketchbook, pen"
SIZE = "5.25\" x 8\""
ORDER = None

# Function to clean and parse the timestamp
def clean_date(date_str):
    if not date_str:
        return None
    date_str = re.sub(r'(\d+)(st|nd|rd|th)', r'\1', date_str)  # Remove ordinal suffixes
    return datetime.strptime(date_str, "%B %d, %Y %I:%M%p")

# Extract post links from index file
def get_post_links():
    with open(INDEX_FILE, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f, "html.parser")
    return [a["href"] for a in soup.select(".post_link a")]

# Extract data from each post HTML
def parse_post(html_file):
    with open(html_file, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f, "html.parser")

    # Title/Description
    caption_div = soup.select_one("div.caption p")
    title = caption_div.text.strip() if caption_div else "Untitled"

    # Timestamp
    timestamp_span = soup.select_one("span#timestamp")
    timestamp_text = timestamp_span.text.strip() if timestamp_span else ""
    date = clean_date(timestamp_text)
    year = date.year if date else None

    # Image URL
    img_tag = soup.select_one("img")
    image_filename = os.path.basename(img_tag["src"]) if img_tag else ""
    image_url = os.path.join(MEDIA_DIR, image_filename)

    # Tags
    tags = [tag.text.lower().strip() for tag in soup.select("span.tag")]

    return {
        "title": title,
        "size": SIZE,
        "year": year,
        "date": date.strftime("%Y-%m-%d") if date else "",
        "description": title,
        "etsyUrl": ETSY_URL,
        "imageUrl": image_url,
        "type": TYPE,
        "source": SOURCE,
        "order": ORDER,
        "series": SERIES,
        "mediums": MEDIUMS,
        "tags": ", ".join(tags),
    }

# Process all posts and write to CSV
def main():
    post_links = get_post_links()
    data = []
    
    for link in post_links:
        html_path = os.path.join(HTML_DIR, link)
        print(html_path)
        post_data = parse_post(html_path)
        data.append(post_data)
    
    # Write CSV
    if data:
        with open(OUTPUT_CSV, "w", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(f, fieldnames=data[0].keys())
            writer.writeheader()
            writer.writerows(data)

        print(f"CSV file saved as {OUTPUT_CSV}")
    else:
        print("No data to write.")

if __name__ == "__main__":
    main()
