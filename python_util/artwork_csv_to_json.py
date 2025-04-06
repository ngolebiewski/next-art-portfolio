import csv
import json
import os
import sys
from datetime import datetime

def parse_list_field(value):
    return [item.strip() for item in value.split(",") if item.strip()]

def convert_csv_to_prisma_json(csv_path, output_path="seed_data.json"):
    with open(csv_path, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        prisma_data = []

        for row in reader:
            artwork = {
                "title": row["title"],
                "size": row["size"],
                "year": int(row["year"]),
                "date": row["date"],
                "description": row["description"],
                "etsyUrl": row["etsyUrl"] or None,
                "imageUrl": row["imageUrl"],
                "type": row["type"],
                "source": row["source"],
                "series": {
                    "connect": {
                        "name": row["series"]
                    }
                },
                "mediums": {
                    "connect": [{"name": name} for name in parse_list_field(row["mediums"])]
                },
                "tags": parse_list_field(row["tags"]) if "tags" in row and row["tags"] else [],
                "order": int(row["order"]) if "order" in row and row["order"].isdigit() else None
            }

            prisma_data.append(artwork)

    # Write standard output
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(prisma_data, f, indent=2)
    print(f"✅ Saved to {output_path}")

    # Write timestamped JSON in /json folder
    os.makedirs("json", exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    timestamped_path = os.path.join("json", f"seed_data_{timestamp}.json")

    with open(timestamped_path, "w", encoding="utf-8") as f:
        json.dump(prisma_data, f, indent=2)
    print(f"🗂️  Backup saved to {timestamped_path}")

# Get filename from CLI
if __name__ == "__main__":
    csv_filename = sys.argv[1] if len(sys.argv) > 1 else "artwork_upload.csv"
    convert_csv_to_prisma_json(csv_filename)
