Botson AI Landing PageA high-performance landing page for Botson AI, built with Next.js (App Router), Tailwind CSS, and Nodemailer for contact form handling.🚀 PrerequisitesBefore you begin, ensure you have the following installed:Node.js (Version 18 or higher)npm (Node Package Manager)🛠️ InstallationClone the repository (or download the files):git clone <your-repo-url>
cd botson-landing
Install dependencies:npm install
🔑 Gmail Configuration (Crucial Step)To allow the contact form to send emails, you cannot use your regular Gmail password. You must generate a specific App Password.Step 1: Enable 2-Step VerificationGo to your Google Account Security Page.Under "How you sign in to Google", make sure 2-Step Verification is turned ON.(Note: Google will not allow you to create an App Password if this is off).Step 2: Generate an App PasswordWhile in the Security page, search for "App passwords" in the top search bar.Click on it (you might need to sign in again).Give the app a name (e.g., "Botson Website").Click Create.Google will show you a 16-character password in a yellow box.Copy this password.You don't need the spaces, but it works with them too.Step 3: Set up Environment VariablesCreate a file named .env.local in the root directory of your project.Paste the following content into it:# Your Gmail address
EMAIL_USER=your-email@gmail.com

# The 16-character App Password you just generated

EMAIL_PASS=xxxx xxxx xxxx xxxx
⚠️ Security Warning: Never commit your .env.local file to GitHub. It contains sensitive credentials.🏃‍♂️ Running LocallyOnce the dependencies are installed and the .env.local file is ready:Start the development server:npm run dev
