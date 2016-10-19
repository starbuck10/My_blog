---
layout: post
title:  "Properly Leveraging the User Persona"
date:   2016-10-07 12:00:00
permalink: /user-personas.html
category: Usability
tags: UX, user-personas, design, innovation
published: true
---

<img src="/images/some_image.png" style="width: 100%;" alt="alt_title">

<b>Properly Leveraging the User Persona</b>

Understanding and building for users is the core principle of usability driven design.  The difficulty of executing this principle is that every member of the team has a vastly different understanding and expectation of who those users are and what they want/need.  The user persona is a tool that helps designers, developers, and engineers synchronize their understanding of those users so that they can focus their development efforts to this end, helping to avoid superfluous features that add unnecessary complexity to design.  

 The user persona brings to life a fictitious, representative user through demographic information, illustrations, and a personalized, well crafted story.  It helps to clarify assumptions, focus the team's goals, and build a set of criterion to prioritize development effort.  The user persona also helps align senior leadership and the project team on what they're building (and why), the scope of that project, and offers defensible justification for design decisions.

The process of developing a user persona is fairly simple and consists of 3 parts: research, analysis, and development.  The research phase involves gathering pertinent data from users, academic/industry research, and behavioral/psychological studies that we use to build our fictitious user.  The analysis phase incorporates that research and user behavioral data with the wants and needs of our target user, forming the basis of information from which we craft our user persona.  The final phase, development, takes those assumptions and facts about our user base and, applying a bit of design and creative thinking, crafts our fictitious user(s), much in the same way that an author crafts their characters.

<img src="/images/persona_process.png" style="width: 100%;" alt="alt_title">

<b>Research</b>

User personas originated around the early 2000s.  Much of their life, however, they've been used outside of their intended purpose, losing the power behind what they can actually do for a development team.  Jaime Levy does a great job explaining this transition in his book, "UX Strategy" ([found here](http://amzn.to/2e4o6WG)):

"...big interactive agencies... used personas to upsell the research/discovery phase to clients.  When used this way, personas were often laughable caricatures packed full of stereotypical details based on nothing more than marketing data... the personas failed in informing the UX strategy process in a basic way." [47]

What this abbreviated process fails to consider is the purpose of the user persona process; personas are about telling stories that help stakeholders better understand and design solutions for their target users.  When stereotypical or unhelpful data infiltrates the user persona, it becomes a designer's up-sell instead of a useful tool for the development team.  We need to keep this in mind when we're conducting our research.

So where and how do we get useful data if marketing stereotypes are unhelpful?  Much in the same way that a primary source is infinitely better than a secondary source, gathering data on your users directly is infinitely better than relying on data conducting by others (we'll talk about other data-points in a minute).

Conducting your own user research is priceless.  Surveys, interviews, and direct observation are the data-points that provide the most useful design information available to you.  Being able to watch how users interact with current solutions, your own prototypes (when you get to that point of the design process), and providing unfiltered responses to your questions ensure that the data you're working with is free from bias, filtering, and unintentional censorship.  Direct observation bridges the gap between, "We know users use our product like this..." and statistical behavioral analysis by gathering real data from which to draw conclusions, instead of gut feelings.

So what if you don't have access to users or you're not allowed to speak with user directly?  If you've been in the world of human-factored design for more than a day, you know this is a problem that nearly every project or team faces.  Senior leadership or the project sponsor inform you that users are unavailable for interviews or testing or that they will happily act as a proxy for their users, thereby removing you from a chance to use a primary data source for analysis.  This situation is what David Platt affectionately refers to as the "third-party problem: the party that's writing the check isn't the party using the software." [The Joy of UX, 34]

Firstly, this is a bad source of data.  Regardless of how empathetic a person is to their user base, they simply cannot emulate the minute layers of idiosyncrasies that come with years of experience, unique upbringing, or habitual behavior.  If we base our user persona on biased or incorrect data in this manner, it's going to be misleading and completely unhelpful for our team.  Working with bad data will always result in poor design decisions, "no data is better than bad data," as they say.  

However, we know that this roadblock can't always be avoided.  So what do you do?  We rely heavily on parallel research efforts to help craft the overall picture of user behavior and have to get creative about how we gather our data, finding willing participants who are similar in nature to your target end-users.

Let's look at readily available data for a minute.

<b>Academic research- </b> often, gathering scientific data behind user behavior is expensive.  From eye-tracking studies to long-term psychological studies, many of the data-points we'd like access to are beyond the reach of feasibility for everyone but research institutions.  Leveraging behavioral and usability data from these institutions helps to craft the underlying question behind why users do the things they do.  Harvard University recently opened a user research center ([details here](http://library.harvard.edu/08272015-1644/user-experience-lab)) and Stanford's Design School is another source of reliable user data.  I've found that leveraging research in psychology, and books like "Predictably Irrational" by Dan Ariely ([here](http://amzn.to/2ecIyoz)) and "Evil by Design" by Chris Nodder([here](http://amzn.to/2dMyLrr)), are also great places to start if you need some help getting plugged in.  An example of fantastic psychological research would be Vanderbilt University's work in understanding how people learn([found here](https://cft.vanderbilt.edu/guides-sub-pages/how-people-learn/)), which can help in the design of products or services that aren't as simple as an every-day iPhone app.  Taking this research and applying it to your persona will help our team understand the motivations behind why certain designs and features are more valued than others.

<b>Industry research- </b> another fantastic set of data comes from analytics and telemetry collected by companies like Google and Nielson Norman Group.  These organizations readily offer data that we can use to craft our user persona.  Quite frequently, gathering a statistical expected 30+ data-points (or users offering feedback, in our case)to reasonably expect a valid analysis based on normal distribution, is out of reach, either due to budget or time restrictions.  For this reason, we can rely on data from these larger organizations to extrapolate certain behaviors across a larger grouping of people.  As an example, if we interviewed 10 users and found that 7 of our users rely heavily on their mobile phone to purchase all of their wardrobe additions, we can take this smaller dataset and validate our findings using Google's research as a sanity check to our findings.  Do we find that a majority of users exhibit the same behavior or did we interview a subset of our user base that isn't truly representative of who we want to design a product for?

<b>Analysis</b>

After gathering pertinent data behind our expected end-users, we must begin analyzing what we've found.  Often, this data will show that there are a few groups of users that you'd like to target, each with their own desires and expectations.  This is perfectly normal and is a good indicator that you've done a decent job in the data gathering process.  Group this data into it's natural user segments before you begin to draw insights from what you see.  I've found as few groupings as 3 or 4 and upwards of 12 through this process from prior experience.

After the user data is segmented, allow the data to determine where you go next with your analysis.  Keep in mind that we need to be highly analytical throughout this process, avoiding stereotypes and assumptions to craft the persona.  Let's say we find from our research that the majority of users can be classified into generational norms: 50% of our target users are Millenials, 30% are Gen-X, and 20% are Baby-Boomers.  The marketing side of our brains may wish to stop here, drawing upon commonly inferred assumptions and classifying their users based upon their willingness to adopt new technologies, their propensity to like certain features, or their expectations of design.  Instead, I would encourage you to go deeper.  Are the Gen-X users highly technical because the application you're looking to build is targeting IT professionals?  Is there an expectation that they must see the data before they're willing to make a decision, instead of relying on colorful metrics?  

<b>Remember:</b> focus on user behavior and the underlying drivers that affect that behavior - it's not enough to say that a user is a "super-user" or has trouble using technology.  A persona must go deeper to provide answer to question like - "Would Sallie find this feature beneficial?" or even "Does she value this capability at all?".

What kind of data are we looking to surface for our user persona?  I've found that if we keep the purpose of the persona in mind, the information we need to create our fictitious users commonly includes:

1. <b>A picture</b> of our user that is representative of who will be using the product.  A picture is worth a thousand words and allows our team to visually resurrect the user we're designing for.  Instead of designing to the description of "for a baby-boomer with a propensity to get his hands dirty, find an image of that user and save your team from imagining 12 different people, all following similar descriptions.

2. <b>Biographical data</b> includes putting a name to a face, age, gender, and any other information that may relevant to understanding who our user is.

3. <b>Personality traits</b> provide insight into the inner-workings and behavior of our user.  These traits are referred to as "grokkability items," from the term, "grok," coined by Robert Heinlein, and help our team "understand intuitively or by empathy..." the user that they're designing for.   We include our user's pet peeves, a quote they would live their life by, what their friends would say about them, or any other component of their personality that might affect the design of our product and provide that necessary insight.  Be creative but always make sure the traits you're giving this user are actionable and answer the underlying question behind that user's behavior.  

4. <b>Desires, wants, and needs</b> paint a picture of what our user must have in a solution.  If they value usability and getting the job done (function) over how the solution looks (form), then let's make sure this is brought to the attention of our team.  Should our user value comparing prices before they make a decision or desire lowest price over a custom fit, our team should have a sense of where this user places priority in choosing to purchase a product.

5. <b>Current solution</b> or the workaround/way that the user accomplishes their goals today.  If you're looking at building a product that helps the elderly contact a loved one in the chance they take a nasty spill, what solutions are out there today?  Does this user leverage those solutions or do they have a workaround that works better than paying for something that is too expensive to be covered by Medicare?  These insights go much deeper than the superficial user segmentation that we're used to seeing in marketing research or focus-groups.  Leverage the user persona to bridge those gaps.

6. <b>Technology or product interaction</b> information changes based on each product in question.  Teams that are looking to design a software solution may be very interested in the devices that a user owns or defaults to when doing certain tasks.  Product designers may care more about the user's opinion about materials, craftsmanship, price, frequency of use for similar products, and other interaction points.  This is where it's really important to choose information that will be actionable for your team and the specific product that you're designing.

7. <b>A relatable story</b> is the final component of the user persona.  Although this is the more creative aspect of the persona and you may tempted to skip it, I encourage you not to.  Humans are natural story-tellers.  These relatable tales help us understand and apply difficult to understand concepts and engage the creative portions of our brains, producing empathy and insight where straight facts never can.  This story rounds out the persona is a chance to help your team put themselves in their users' shoes, more than a simple list of facts ever could.

<b>Development</b>

After performing user interviews, conducting research, and building out a picture of who your end-users are, the development phase is where everything is put together in a product for the team to use.  In the beginning of this post I mentioned that you might have a handful of potential users for your product.  No more than 3 should make it past this point (2 is ideal).  Having more than a primary and secondary user for the product (or at most, 3) will lead to a conflict of prioritization and desires while designing the product, leading to down-time when those conflicts of interest cannot be resolved.  

The ideal user persona should be about a page in length and both the primary and secondary user personas should be used as large information radiators within the design and development team rooms, always remaining front of mind when decisions are made.  The bigger the poster the better, reminding each member of the team who they're designing the product for.  This is another opportunity to get creative in the design of the user persona, but I would encourage you to spend more time on the research and user interviews and less time on the design of the persona.

<b>Parting Thoughts</b>
After putting all of the work into creating a user persona, don't let it gather dust in a binder on the bookshelf.  The persona is meant to be actively used by the development team and should be updated with additional insights as the project progresses.  Be sure to also use the persona to justify decisions of prioritization and design changes to senior leadership, reinforcing the necessity and applicability of these decisions, especially when senior leaders might be far removed from the actual users of the product.  If you're going to put spend the time to craft a user persona, put it to work for you, don't leave it buried in the kick-off deck, never to see the light of day again.

Let me reiterate that thought; the user persona is a living and breathing document that should be updated throughout the development process.  As new information is discovered about users through usability testing, these trends and discoveries should further enhance our understanding of the user we're designing for.

Keeping our users in the forefront of our mind is essential in usability driven design.  The user persona is a powerful tool that will get your team laser-focused on building the perfect process for your user.


Share this blogpost! <a href="https://twitter.com/share" class="twitter-share-button" data-via="UXDesignPro" data-show-count="false">Tweet</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
