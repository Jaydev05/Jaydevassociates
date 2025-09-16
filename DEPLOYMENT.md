# Deployment Guide for Jaydev Associates Website

## Prerequisites
- GitHub account
- Vercel account (free)
- Domain name (optional, can use Vercel subdomain initially)

## Step 1: Prepare Your Code

1. **Initialize Git Repository**
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit - Jaydev Associates website"
   \`\`\`

2. **Push to GitHub**
   - Create a new repository on GitHub
   - Push your code:
   \`\`\`bash
   git remote add origin https://github.com/yourusername/jaydev-associates-website.git
   git branch -M main
   git push -u origin main
   \`\`\`

## Step 2: Deploy to Vercel

1. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository

2. **Configure Environment Variables**
   In Vercel dashboard, add these environment variables:
   \`\`\`
   NEXTAUTH_URL=https://your-domain.vercel.app
   NEXTAUTH_SECRET=your-super-secret-key-here
   \`\`\`

3. **Database Setup**
   - In Vercel dashboard, go to Storage tab
   - Create new Postgres database
   - Copy the connection string to POSTGRES_URL

4. **Deploy**
   - Click Deploy
   - Wait for deployment to complete

## Step 3: Initialize Database

1. **Access Database**
   - Go to Vercel dashboard > Storage > Your Database
   - Click "Query" tab
   - Run the SQL from `scripts/init-database.sql`

2. **Verify Setup**
   - Visit your deployed site
   - Go to `/admin` and login with:
     - Email: admin@jaydevassociates.com
     - Password: admin123

## Step 4: Custom Domain (Optional)

1. **Add Domain in Vercel**
   - Go to Project Settings > Domains
   - Add your custom domain

2. **Update DNS**
   - Add CNAME record pointing to your Vercel deployment
   - Wait for DNS propagation

3. **Update Environment Variables**
   - Change NEXTAUTH_URL to your custom domain

## Step 5: Post-Deployment

1. **Change Admin Password**
   - Login to admin panel
   - Update admin credentials in database

2. **Test All Features**
   - Contact form submission
   - Admin panel functionality
   - Testimonials management

3. **Update Content**
   - Add real testimonials
   - Update contact information
   - Customize website stats

## Security Checklist

- [ ] Change default admin password
- [ ] Use strong NEXTAUTH_SECRET
- [ ] Enable HTTPS (automatic with Vercel)
- [ ] Regular database backups
- [ ] Monitor admin access logs

## Maintenance

- **Database Backups**: Vercel provides automatic backups
- **Updates**: Push to GitHub to trigger automatic deployments
- **Monitoring**: Use Vercel Analytics for performance monitoring

## Support

If you encounter any issues:
1. Check Vercel deployment logs
2. Verify environment variables
3. Test database connection
4. Check admin panel functionality

Your website will be live at: `https://your-project-name.vercel.app`
\`\`\`

Now let me create a simple setup verification script:
