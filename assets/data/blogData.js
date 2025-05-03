
const blogPosts = [
    // {
    //   id: "how-we-started",
    //   title: "How We Started",
    //   subtitle: "A glimpse into how our journey began and the values that shaped us.",
    //   image: "./assets/images/carousal-2.jpeg",
    //   category: "Journey",
    //   author: "Meenal",
    //   date: "April 20, 2025",
    //   content: `
    //   <p>We started with a simple goal: to make knowledge more accessible and engaging. 
    //   Our team came together through a shared passion for technology and design.</p>

    //   <p>Here are some of the values that guided us:</p>
    //   <ul>
    //     <li>📘 Transparency in decision-making</li>
    //     <li>🤝 Collaborative work culture</li>
    //     <li>💡 Constant innovation and iteration</li>
    //   </ul>

    //   <p>Our first workspace looked nothing like it does now. We used to work from a small garage 
    //   with a single whiteboard and two desks.</p>

    //   <img src="https://img.freepik.com/free-photo/businesswomen-meeting_1098-3974.jpg" alt="Our first workspace" class="content-img" />

    //   <p>Today, we’re proud to have grown into a full-fledged team that's helping thousands every day.</p>

    //   <h3>Milestones We’ve Achieved</h3>
    //   <ol>
    //     <li>Launched MVP in 3 months</li>
    //     <li>Onboarded 10,000 users in 6 months</li>
    //     <li>Reached profitability in Year 2</li>
    //   </ol>

    //   <p>We couldn’t have done it without the unwavering support of our early users and the 
    //   incredible commitment of our team.</p>

    //   <img src="https://img.freepik.com/free-photo/business-women-meeting-office_23-2148347234.jpg" alt="Team success" class="content-img" />
    // `
    // },
    {
      id: "fueling-growth",
      title: "Fueling Growth: The Journey of a Lifelong Learner",
      subtitle: "How Meenal’s vision of lifelong learning shaped TakeMeAway",
      image: "./assets/images/blog-001.jpg",
      category: "Founder Story",
      author: "Meenal",
      date: "April 25, 2025",
      content: `
        <p><strong>Meenal</strong> is the visionary founder of <em>TakeMeAway</em>, a platform where travel, learning, and community converge to create transformative experiences.</p>
        
        <p>With over 15 years of experience leading product innovation, driving sales, engagement, and delivering trainings across brands like <strong>MakeMyTrip</strong>, <strong>upGrad</strong>, and <strong>IndiGo</strong>, Meenal’s work is deeply rooted in her personal journey of growth and self-discovery.</p>
    
        <p>She believes in reading <strong>“Empower”</strong> as <strong>“I Am Power”</strong> — a philosophy she passionately advances through mindset rewiring and community-driven initiatives.</p>
        
        <p><strong>TakeMeAway</strong> is a testament to her belief that learning is not a destination but a lifelong journey of becoming your best self.</p>
        
        <h3>What Drives Her</h3>
        <ul>
          <li>📚 A deep passion for lifelong learning</li>
          <li>🌍 A desire to connect people through shared travel and educational experiences</li>
          <li>💬 A belief in community as a catalyst for change</li>
        </ul>
        
        <p>Meenal continues to inspire thousands with her story and mission, reminding us all that true growth begins with curiosity and courage.</p>
      `
    },
    {
      id: "beyond-privilege",
      title: "Beyond What Meets the Eye: A Reflection on Privilege and Inclusion",
      subtitle: "A personal story that challenges assumptions and deepens empathy",
      image: "./assets/images/blog-002.jpg",
      category: "Reflections",
      author: "Meenal",
      date: "April 28, 2025",
      content: `
        <p><strong>Not all challenges are visible</strong>, and not all privileges are recognized at first glance.</p>
        
        <p>During a recent visit to a government hospital to obtain my <strong>Unique Disability ID (UDID)</strong>, I witnessed people with visible and severe disabilities enduring long queues — not just for treatment, but for basic documentation.</p>
        
        <p>Meanwhile, I waited comfortably while my father stood in line for me — a stark reminder of the <em>silent privileges</em> that cushion many of us.</p>
        
        <p>Born into a home filled with love and opportunity, I was shielded from much hardship. Yet <strong>self-acceptance</strong> was still a long internal battle.</p>
        
        <p>This moment reinforced a powerful truth: <strong>Inclusion isn’t about policies — it’s about empathy, acknowledgment, and creating spaces where every story matters.</strong></p>
        
        <h3>A Commitment to Change</h3>
        <p>I am committed to building platforms that recognize every woman’s journey — making them feel truly <strong>seen, heard, and celebrated</strong>.</p>
      `
    },
    {
      id: "roots-of-strength",
      title: "Roots of Strength: The Story Behind My Rise",
      subtitle: "Honoring the people and values that shaped my journey",
      image: "./assets/images/blog-003.jpg",
      category: "Personal Journey",
      author: "Meenal",
      date: "May 1, 2025",
      content: `
        <p>Stepping away from the conventional path, I chose a life anchored in <strong>purpose</strong>, <strong>growth</strong>, and <strong>community building</strong>.</p>
        
        <p>The foundation of my journey has been my <strong>family</strong>, mentors, and the supportive network around me:</p>
        
        <ul>
          <li>👨‍👧 <strong>My father</strong>, my unwavering source of strength.</li>
          <li>👩‍👧 <strong>My mother</strong>, whose wit, warmth, and entrepreneurial spirit light up every room.</li>
          <li>🧠 <strong>My sister</strong>, a behavioral analyst dedicated to helping children with autism and Down syndrome — inspiring me daily with her compassion.</li>
          <li>💻 <strong>My brother-in-law</strong>, a tech expert whose kindness and support define true strength.</li>
          <li>🎀 <strong>My two nieces, Meher and Mehak</strong> — sharp, spirited, and the future I dream to help shape.</li>
        </ul>

        <p>Through <strong>TakeMeAway</strong>, I invite women to connect, grow, and create powerful journeys of their own.</p>
        
        <p><em>Let’s build something bigger — together.</em></p>
        
        <p><strong>Love, Meenal</strong><br/>
        <a href="mailto:takemeaway.womenretreat@gmail.com">takemeaway.womenretreat@gmail.com</a></p>
      `
    },  
    {
      id: "power-of-pause",
      title: "The Power of Pause: From Chaos to Calm",
      subtitle: "Why slowing down saved my life — and might save yours too",
      image: "./assets/images/blog-004.jpg",
      category: "Well-being",
      author: "Meenal",
      date: "March 22, 2025",
      content: `
        <p>For years, I pushed through the warning signs — persistent neck and shoulder pain — until a slipped disc in my cervical spine forced me to stop.</p>
        <p>After surgery and 3 months of healing, I realized that pausing is not a weakness — it’s an act of self-respect and survival.</p>
        <p>I embraced a new way of living: prioritizing rest, mindfulness, meditation, journaling, and spiritual practices.</p>
        <p>This journey taught me that ambition must never come at the cost of health.</p>
        <p><strong>To all the driven women out there:</strong></p>
        <p><em>Pause. Listen to your body. Set your boundaries.<br>Your dreams need your health more than your hustle.</em></p>
        <p>Love,<br>Meenal<br>(22.03.2025)</p>
      `
    },
    {
      id: "the-confidence-class",
      title: "The Confidence Class",
      subtitle: "How teaching kids helped me rediscover myself",
      image: "./assets/images/blog-005.jpg",
      category: "Life Lessons",
      author: "Meenal",
      date: "May 3, 2025",
      content: `
        <p>While I was on a break after my surgery, I had time to slow down and think about what really matters to me. That’s when I got the opportunity to teach over 100 kids, aged 5 to 12, at the Shiv Nagar Jain Mandir in Shree Vidyasagar Sanskar Vatika Pathshala, Jabalpur.</p>
        
        <p>I chose to teach them something I struggled with for years—how to build confidence. I was never taught this as a child, and it took me a long time to believe in myself. So, I wanted to give these kids a better start.</p>
        
        <p>We kept it simple with 3 rules: respect each other, clap for each other, and most of all, have fun in the class. I asked them to say, “I have the power!” and feel it in their hearts. The way they joined in, with energy and excitement, made me feel proud and full of hope.</p>
        
        <p>One little girl said something that stayed with me—“I feel like I live in Swarg (heaven).” Her words reminded me to see the beauty in life and feel grateful for every moment.</p>
        
        <p>To be honest, I never thought I’d enjoy working with kids. I didn’t think I had the patience. But this experience changed my thinking. I felt calm, happy, and full of purpose.</p>
        
        <p>Sometimes, life takes you where you’re meant to be—not through plans, but through surprises. Teaching these little hearts helped me reconnect with mine. And maybe, just maybe, this is where my real journey begins.</p>
      `
    }
    
    
  ];
  