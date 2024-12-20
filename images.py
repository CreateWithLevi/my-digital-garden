import os
import re
import shutil

# Paths
posts_dir = "/Users/levi/Documents/createwithlevi/content/"
attachments_dir = "/Users/levi/Library/Mobile Documents/iCloud~md~obsidian/Documents/Ideaverse/Atlas/Utilities/Images/"
quartz_images_dir = "/Users/levi/Documents/createwithlevi/content/images/"

# Step 1: Process each markdown file in the posts directory
for filename in os.listdir(posts_dir):
    if filename.endswith(".md"):
        filepath = os.path.join(posts_dir, filename)
        print(f"Processing file: {filename}")
        
        with open(filepath, "r") as file:
            content = file.read()
        
        # Step 2: Find all image links in the format ![Image Description](Pasted%20image%20...%20.png)
        images = re.findall(r'!\[.*?\]\(([^)]+\.png)\)', content)
        print(f"Found images: {images}")
        
        # Step 3: Replace image links and ensure URLs are correctly formatted
        for image in images:
            # Prepare the Markdown-compatible link with %20 replacing spaces
            markdown_image = f"![](/images/{image.replace(' ', '%20')})"
            content = content.replace(f"![]({image})", markdown_image)
            content = re.sub(r'!\[.*?\]\(' + re.escape(image) + r'\)', markdown_image, content)
            print(f"Replaced image link: {image} with {markdown_image}")
            
            # Step 4: Copy the image to the Quartz images directory if it exists
            image_source = os.path.join(attachments_dir, image)
            if os.path.exists(image_source):
                shutil.copy(image_source, quartz_images_dir)
                print(f"Copied image: {image_source} to {quartz_images_dir}")
            else:
                print(f"Image not found: {image_source}")

        # Step 5: Write the updated content back to the markdown file
        with open(filepath, "w") as file:
            file.write(content)
        print(f"Updated file: {filepath}")

print("Markdown files processed and images copied successfully.")
