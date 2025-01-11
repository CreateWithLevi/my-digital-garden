import os
import re
import shutil

# Paths
base_content_dir = "/Users/levi/Documents/createwithlevi/content/"
attachments_dir = "/Users/levi/Library/Mobile Documents/iCloud~md~obsidian/Documents/Ideaverse/Atlas/Utilities/Images/"
quartz_images_dir = "/Users/levi/Documents/createwithlevi/content/images/"

def process_markdown_files(directory):
    for filename in os.listdir(directory):
        if filename.endswith(".md"):
            filepath = os.path.join(directory, filename)
            print(f"Processing file: {filename}")
            
            with open(filepath, "r") as file:
                content = file.read()
            
            # Find both standard Markdown and Obsidian-style image links
            images = re.findall(r'(?:!\[(.*?)\]\(([^)]+\.png)\)|!\[\[([^]]+\.png)\]\])', content)
            images = [img[1] if img[1] else img[2] for img in images]  # Extract filename from matched groups
            print(f"Found images: {images}")
            
            # Replace image links and ensure URLs are correctly formatted
            for image in images:
                # Handle Obsidian-style links
                obsidian_pattern = f"![[{image}]]"
                markdown_image = f"![](/images/{image.replace(' ', '%20')})"
                
                if obsidian_pattern in content:
                    content = content.replace(obsidian_pattern, markdown_image)
                else:
                    # Handle standard Markdown links
                    content = content.replace(f"![]({image})", markdown_image)
                    content = re.sub(r'!\[.*?\]\(' + re.escape(image) + r'\)', markdown_image, content)
                
                print(f"Replaced image link: {image} with {markdown_image}")
                
                # Copy the image to the Quartz images directory if it exists
                image_source = os.path.join(attachments_dir, image)
                if os.path.exists(image_source):
                    shutil.copy(image_source, quartz_images_dir)
                    print(f"Copied image: {image_source} to {quartz_images_dir}")
                else:
                    print(f"Image not found: {image_source}")

            # Write the updated content back to the markdown file
            with open(filepath, "w") as file:
                file.write(content)
            print(f"Updated file: {filepath}")

# Process root content directory
process_markdown_files(base_content_dir)

# Process language-specific directories
for lang in ['en', 'zh']:
    lang_dir = os.path.join(base_content_dir, lang)
    if os.path.exists(lang_dir):
        print(f"\nProcessing {lang} directory...")
        process_markdown_files(lang_dir)
