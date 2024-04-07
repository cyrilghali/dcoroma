#!/bin/bash

## REQUIREMENTS : pdftoppm (poppler-utils)

# Directory containing your PDF files
PDF_DIR="../public/files"
# Directory where you want to save the cover images
COVER_DIR="../public/covers"

# Create the covers directory if it doesn't exist
mkdir -p $COVER_DIR

# Loop through all PDF files in the PDF directory
for pdf in $PDF_DIR/*.pdf; do
	# Extract filename without the extension
	filename=$(basename "$pdf" .pdf)
	# Use pdftoppm to generate an image of the first page of the PDF
    pdftoppm -f 1 -l 1 -jpeg -jpegopt quality=90 -singlefile "$pdf" "$COVER_DIR/$filename"
done

echo "Cover images generated in $COVER_DIR."
