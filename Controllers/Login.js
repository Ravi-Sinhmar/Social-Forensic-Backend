
const login = async (username, password,page) => {
    // Wait for the article element
    // console.log("Hey");
    // const article = await page.waitForSelector('article');
  
    // Function to handle login
    // await article.evaluate(async (article) => {
    //   // Delay function
    //   const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    //   let count = 0;
    //   // while (true) {
    //   //   const allButtons = article.querySelectorAll('button , a');
    //   //   console.log('allButtons', allButtons);
        
    //   //   const loginLinks = Array.from(allButtons).filter(link => 
    //   //     link.textContent.toLowerCase().replace(" ", "").includes('login')
    //   //   );
  
    //   //   if (loginLinks.length > 0 || count > 10) {
    //   //     if (loginLinks.length > 0) {
    //   //       console.log("Login link found: ", loginLinks[0]);
    //   //       loginLinks[0].click(); // Click the login button
    //   //     }
    //   //     break;
    //   //   } 
  
    //   //   count++;
    //   //   await delay(500); // Await the delay
    //   // }
    // });

   await page.goto("https://www.instagram.com/accounts/login/?next=%2F&source=mobile_nav");
    // Wait for login input fields and submit button to be available

    await page.waitForSelector('input[name="username"]');
    await page.waitForSelector('input[name="password"]');
    await page.waitForSelector('button[type="submit"]');
  
    // Assign data and log in
    await page.type('input[name="username"]', username);
    await page.type('input[name="password"]', password);
    await page.click('button[type="submit"]');
    return  true;
    
  };
  
  module.exports = login;
  