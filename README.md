# FanFund

## Overview

FanFund is a crowdfunding platform designed specifically for developers, creators, and influencers. Our platform allows users to support their favorite projects and creators financially, helping them bring their visions to life. With intuitive design tools and a focus on simplicity, 

<!-- ## Features

- **Customizable Campaign Pages**: Tailor your campaign's look and feel to match your unique style, including color schemes, fonts, and page design.
- **High Performance**: Our platform is optimized for speed, ensuring fast load times so your supporters can access your campaign quickly and easily.
- **Comprehensive Tools**: Everything you need to run a successful campaign, from analytics to support tools, right out of the box.
- **Secure Payments**: Integration with Razorpay for secure and smooth transactions. -->

## Technologies Used

- **Frontend & Backend**: Next.js (JavaScript) 
- **Styling**: Tailwind CSS
- **Database**: MongoDB
- **Payments**: Razorpay integration

## Getting Started

### Prerequisites

- Node.js (v12.x or later)
- npm (v6.x or later) or yarn (v1.22.x or later)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/nishchay-tomar/FanFund.git
   cd get-me-a-chai
    ```

1. **Install dependencies:**

   ```sh
   npm install
   #or
   yarn install
   ```
3. **Set up environment variables:**

    Create a .env.local file in the root directory and add the necessary environment variables (example below):

    ```sh
    MONGODB_URI=your_mongodb_connection_string
   
    GITHUB_ID=<Github_ID>
    GITHUB_SECRET=<Github_Secret>

    GOOGLE_CLIENT_ID=<YOUR_GOOGLE_CLIENT_ID>
    GOOGLE_CLIENT_SECRET=<YOUR_GOOGLE_CLIENT_SECRET>

    MONGODB_URI=<YOUR_MONGODB_URI>

    NEXT_PUBLIC_URL=<YOUR_NEXT_PUBLIC_URL>
    NEXTAUTH_URL=<YOUR_NEXTAUTH_URL>
    NEXTAUTH_SECRET=<YOUR_SECRET>
    ```
 4. **Getting Started**

    First, run the development server:

    ```sh
        npm run dev
        # or
        yarn dev
        # or
        pnpm dev
        # or
        bun dev
     ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
