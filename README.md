# Content Editing Guide for BodyByKishani Website

This guide will walk you through how to edit content on your fitness website, even if you have no technical experience. Follow these steps carefully.

---

## Table of Contents
1. [Initial Setup](#initial-setup)
2. [Opening and Editing Files](#opening-and-editing-files)
3. [Editing Specific Sections](#editing-specific-sections)
4. [Adding Images and Videos](#adding-images-and-videos)
5. [Deploying Changes to GitHub Pages](#deploying-changes-to-github-pages)
6. [Troubleshooting](#troubleshooting)

---

## Initial Setup

### Step 1: Install Visual Studio Code

1. Go to [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. Click the big blue "Download" button for your operating system (Windows, Mac, or Linux)
3. Once downloaded, open the installer file
4. Follow the installation prompts, accepting the default options
5. Launch VS Code when installation is complete

### Step 2: Install Git

1. Go to [https://git-scm.com/downloads](https://git-scm.com/downloads)
2. Download Git for your operating system
3. Run the installer and accept all default settings
4. Restart your computer after installation

### Step 3: Clone Your Website Repository

1. Open Visual Studio Code
2. Press `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (Mac) to open the Command Palette
3. Type "Git: Clone" and press Enter
4. Paste this URL: `https://github.com/bodybykishani/bodybykishani.github.io.git`
5. Choose a folder on your computer where you want to save the project (like Documents or Desktop)
6. Click "Select Repository Location"
7. When prompted, click "Open" to open the cloned repository

**Congratulations!** You now have a copy of your website on your computer.

---

## Opening and Editing Files

### Finding Files in VS Code

On the left side of VS Code, you'll see a file explorer showing all your website files. The main folders you'll work with are:

- **components/** - Contains individual sections of your website
- **public/** - Contains images and videos
- **app/** - Contains page layouts

### Opening a File

1. Click on the file explorer icon (📁) on the left sidebar
2. Navigate through folders by clicking on them
3. Click on a file name to open it
4. The file content will appear in the main editor area

---

## Editing Specific Sections

### 1. Editing Workout Videos

**File Location:** `components/workout-videos.tsx`

**What You Can Edit:**

#### Adding a New Video

1. Open `components/workout-videos.tsx`
2. Find the section that starts with `const videos: Video[] = [`
3. Copy this template and add it to the list:

\`\`\`typescript
{
  id: '7',
  title: 'Your Video Title Here',
  category: 'Upper Body', // Choose from: Upper Body, Lower Body, Core, Cardio
  videoUrl: '/videos/your-video-filename.mp4',
  description: 'Your video description here. You can write multiple lines.\n\nUse \\n\\n to create paragraph breaks.',
},
\`\`\`

4. Make sure to add a comma after the previous video entry
5. Save the file (Ctrl+S or Cmd+S)

#### Editing Video Details

Find the video you want to edit in the `videos` array and change:
- **title** - The video title shown below the thumbnail
- **category** - Which category it appears in (must match one of the categories exactly)
- **description** - The text description that appears when users click the video
- **videoUrl** - The path to your video file (see "Adding Videos" section below)

#### Changing Video Categories

1. Find the line: `const categories = ['All', 'Upper Body', 'Lower Body', 'Core', 'Cardio']`
2. Add or remove categories (keep them in quotes and separated by commas)
3. Make sure your videos use the exact same category names

---

### 2. Editing Program Information

**File Location:** `components/programs.tsx`

#### Changing Program Price

1. Open `components/programs.tsx`
2. Find this section:
\`\`\`typescript
const featuredProgram = {
  title: '10-Week Lean Muscle Program',
  originalPrice: 150,
  price: 98,
\`\`\`

3. Change the numbers:
   - **originalPrice** - The crossed-out "before" price
   - **price** - The actual current price

#### Editing Program Inclusions

Find the `programInclusions` array and edit any of the items. Each item has:
- **title** - The bold heading (e.g., "Weekly 1-on-1 coaching sessions")
- **description** - The explanation text that follows

Example:
\`\`\`typescript
{
  title: 'Your New Benefit Title',
  description: 'Detailed explanation of what this includes.'
},
\`\`\`

#### Adding a New Program Inclusion

1. Find the closing bracket `]` of the `programInclusions` array
2. Before that closing bracket, add a comma after the last item
3. Add your new inclusion:

\`\`\`typescript
{
  title: 'Your New Inclusion Title',
  description: 'What this includes and why it matters.'
},
\`\`\`

#### Editing Coming Soon Programs

Find the `comingSoonPrograms` array and edit:
- **title** - The main program name
- **subtitle** - The program duration or tagline
- **description** - Short description of who it's for

---

### 3. Editing Transformations

**File Location:** `components/transformations.tsx`

#### Adding a New Transformation

1. Open `components/transformations.tsx`
2. Find the `transformations` array
3. Add a new transformation before the closing bracket `]`:

\`\`\`typescript
{
  name: 'Client Name',
  beforeImage: '/before-client-name.jpg',
  afterImage: '/after-client-name.jpg',
  testimonial: 'Put the client testimonial quote here. Make it personal and authentic.',
},
\`\`\`

4. Don't forget the comma after the previous entry

#### Editing Existing Transformations

Change any of these fields:
- **name** - Client's name
- **beforeImage** - Path to the "before" photo (see "Adding Images" section)
- **afterImage** - Path to the "after" photo
- **testimonial** - The quote from the client

---

### 4. Editing Text on Other Sections

#### Hero Section (Main Banner)
**File:** `components/hero-section.tsx`

Find and edit these text strings:
- Main headline
- Subheadline
- Button text

#### Why Train With Kian Section
**File:** `components/why-train-with-kian.tsx`

Edit the bullet points and descriptions in this section.

#### Footer
**File:** `components/footer.tsx`

Edit links, copyright text, and social media information.

---

## Adding Images and Videos

### Adding Images

1. Open the `public` folder in VS Code
2. Drag your image file from your computer and drop it into the `public` folder
3. Make sure the filename:
   - Has no spaces (use hyphens instead: `my-image.jpg`)
   - Is all lowercase
   - Ends in .jpg, .jpeg, or .png

4. To use this image in your code, reference it as `/your-image-name.jpg`

**Example:** If you added `chest-workout.jpg` to the public folder, use it like this:
\`\`\`typescript
beforeImage: '/chest-workout.jpg',
\`\`\`

### Adding Videos for Workouts

1. Place your MP4 video file in the `public/videos/` folder
   - If the `videos` folder doesn't exist, create it inside `public`
2. Name your video with no spaces (use hyphens: `chest-workout.mp4`)
3. Reference it in your code as `/videos/your-video-name.mp4`

**Example:**
\`\`\`typescript
videoUrl: '/videos/chest-workout.mp4',
\`\`\`

### Adding the Coach Introduction Video

For the featured program video:
1. Add your video to the `public` folder
2. Name it `coach-intro.mp4` (replace the existing one if present)
3. Add a thumbnail image named `coach-video-thumbnail.jpg`

---

## Deploying Changes to GitHub Pages

After making your edits, follow these steps to publish them to your live website.

### Step 1: Save All Changes

1. Make sure all files are saved (Ctrl+S or Cmd+S)
2. Look for white dots next to file names at the top - these indicate unsaved files
3. Save each one

### Step 2: Commit Your Changes

1. Click the Source Control icon on the left sidebar (it looks like a branch with three circles)
2. You'll see a list of all files you changed
3. In the message box at the top, type a description of what you changed
   - Example: "Updated workout videos and program pricing"
4. Click the checkmark button (✓) above the message box to commit

### Step 3: Push to GitHub

1. Click the three dots (...) in the Source Control panel
2. Select "Push" from the menu
3. If prompted, enter your GitHub username and password
   - **Note:** You may need to use a Personal Access Token instead of a password
   - [How to create a token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

### Step 4: Wait for Deployment

1. Go to your repository on GitHub: [https://github.com/bodybykishani/bodybykishani.github.io](https://github.com/bodybykishani/bodybykishani.github.io)
2. Click the "Actions" tab at the top
3. You'll see a workflow running - this is your website being deployed
4. Wait for the green checkmark (usually takes 2-5 minutes)
5. Your changes are now live at [https://bodybykishani.github.io](https://bodybykishani.github.io)

---

## Troubleshooting

### Problem: My changes aren't showing on the live site

**Solution:**
1. Clear your browser cache (Ctrl+Shift+Delete)
2. Wait 5-10 minutes for GitHub Pages to fully deploy
3. Try opening the site in an incognito/private window

### Problem: Videos aren't playing

**Solutions:**
1. Make sure your video file is in MP4 format
2. Check that the file path in your code exactly matches the filename
3. Ensure the video file isn't too large (try to keep under 50MB)

### Problem: Images aren't showing

**Solutions:**
1. Check that the image path starts with `/` (example: `/my-image.jpg`)
2. Verify the image is in the `public` folder
3. Check that the filename exactly matches (including capitalization)
4. Make sure the file extension is included (.jpg, .png, etc.)

### Problem: I broke something and don't know how to fix it

**Solution: Undo Your Changes**
1. In VS Code, go to Source Control (left sidebar)
2. Right-click on the file you want to revert
3. Select "Discard Changes"
4. This will restore the file to its previous state

**Alternative: Contact Support**
- Take a screenshot of the error message
- Note which file you were editing
- Contact your web developer for assistance

---

## Quick Reference: Common Tasks

### Add a Workout Video
1. Put MP4 file in `public/videos/`
2. Open `components/workout-videos.tsx`
3. Add new entry to `videos` array
4. Save, commit, and push

### Change Program Price
1. Open `components/programs.tsx`
2. Find `featuredProgram` object
3. Change `price` and `originalPrice`
4. Save, commit, and push

### Add a Transformation
1. Put before/after images in `public/`
2. Open `components/transformations.tsx`
3. Add new entry to `transformations` array
4. Save, commit, and push

### Update Coach Video
1. Replace `public/coach-intro.mp4` with your new video
2. Replace `public/coach-video-thumbnail.jpg` with new thumbnail
3. Commit and push

---

## Best Practices

1. **Always save your work** before committing changes
2. **Test locally** if possible before pushing to live site
3. **Write clear commit messages** so you know what you changed
4. **Keep backups** of original images/videos before replacing them
5. **Make small changes** at a time so it's easier to fix if something breaks
6. **Use descriptive filenames** for images and videos (good: `chest-workout-april-2024.mp4`, bad: `vid1.mp4`)

---

## Need Help?

If you get stuck:
1. Read the error message carefully
2. Check that all file paths are correct
3. Make sure you saved all files
4. Try reverting your changes and starting over
5. Contact your web developer with:
   - What you were trying to do
   - What file you were editing
   - Any error messages you see
   - Screenshots of the problem

---

**Remember:** It's okay to make mistakes! You can always revert changes or restore files. Take your time and follow the steps carefully.
