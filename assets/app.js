//
//
// logout
document.getElementById("logout").addEventListener("click", () => {
  let prompt = confirm("Logout?");

  if (prompt) {
    sessionStorage.clear();
    window.location.assign("login.html");
  }
});

//
//
// check session

if (sessionStorage.getItem("login") !== "true") {
  alert("You must login first!");
  window.location.assign("login.html");
}

//
//
// check role
if (
  sessionStorage.getItem("login") == "true" &&
  sessionStorage.getItem("role") === "user"
) {
  document.getElementById("edit").style.display = "none";
  document.getElementById("delete").style.display = "none";
  document.getElementById("add").style.display = "none";
  document.getElementById("restore").style.display = "none";
  document.getElementById("remove").style.display = "none";
} 


//
//
// message
const team =
  "Hello from Hackstore,Our team:,Gilang Idul Fitri,Yusuf Bahrudin Nizar,David Wijaya,Mijel Fernando,Thanks for visit!,Happy Gaming !";
const el = document.querySelector("span");

let count = 0;

const typing = setInterval(() => {
  if (team[count] === ",") {
    el.innerHTML = "";
  } else {
    el.innerHTML += team[count];
  }

  if (count === team.length - 1) {
    clearInterval(typing);
  }
  count++;
}, 80);

//
//
// restore all data
document.getElementById("restore").addEventListener("click", () => {
  const prompt = confirm("Restore default data?");

  if (prompt) {
    const data = [
      // {
      //   title: "",
      //   author: "",
      //   about: ``,
      //   thumb: "",
      //   background: "",
      // },

      {
        title: "Subway Surfer",
        author: "SYBO Games",
        about: `- Enter a world full of fantasy with the Subway Surfers World Tour Fantasy Fest
  - New feature alert! We're placing Subway Surfers stories into your hands with Subway Studio - capture, create and share!
  - Alfie joins the crew on his powered-up Big Boss Board - find them in the Season Hunt.
  - Trym gets a new look - collect Event Coins and unlock his Noble Newbie Outfit, plus lots more exciting content.
  - Participate in challenging events in Oxford, Greece, Mumbai and Las Vegas.`,
        thumb:
          "https://play-lh.googleusercontent.com/ltRo8DeZ7zV4FHx-QCwWu05aL8V-QhnQoJ-ZLdAWLxiNff7L_ezVyl9HiCN2VR4Vxg=w1052-h592-rw",
        background:
          "https://play-lh.googleusercontent.com/sIpgfRv0M668S2BktGWyqePvx15IMg21diI0WLpEMgwhLwE3EyLUA4HxpmAl0fXUS1c=w1052-h592-rw",
      },

      {
        title: "Bombsquad",
        author: "Eric Froemling",
        about: `Lots of internal reorganization in preparation for the upcoming 1.8 update. Modders, please see ballistica.net to learn what has changed and how to update your mods.`,
        thumb:
          "https://play-lh.googleusercontent.com/MSscvaZgWdsiID7p3VBxMvihPpc5LUzwJpmUwjY8DrDB_Gq67C9nwitz3Ugl_Plxid8o=w1440-h810-rw",
        background:
          "https://play-lh.googleusercontent.com/lh0-rXD4RNPqj2SwfR3_8YswEAFMc3OdAIgubF5Lu0hSUeBAv9zaWaT-dpWi8U9l8dY=w1052-h592-rw",
      },

      {
        title: "PUBG Mobile",
        author: "Level Infinate",
        about: `New Themed Game Mode - Dinoground: Head to Dino Settlement and become a Dinosaur Tamer!
  Check out the new World of Wonder templates with friends!
  Firearm Update: Added a Full-Auto Mod that gives popular firearms a full-auto firing mode!
  All-new Royale Pass A series arrives with an upgradable melee weapon and custom color outfits!
  New Features: Companion Spectating System and Convertible Sports Car Mechanic for the ultimate Battle Royale experience!`,
        thumb:
          "https://play-lh.googleusercontent.com/JRd05pyBH41qjgsJuWduRJpDeZG0Hnb0yjf2nWqO7VaGKL10-G5UIygxED-WNOc3pg=w480-h960-rw",
        background:
          "https://play-lh.googleusercontent.com/H9RYeORqpIxdFLXlilZg7BqFo-TeE1bfSNsvV8aq-GC6asqjFthzOdCEknr4w7let4Xh=w1052-h592-rw",
      },

      {
        title: "Mobile Legends: Bang Bang",
        author: "Moontoon",
        about: `1. New Hero: [Arclight Outlaw - Ixia], a young shooter who is good at using her custom weapons to fight the enemies her own way.
  2. Revamped Emblems: Match up any talent with any Emblem. And progress fast with the help of the new Battle Setups.
  3. S29 Season will begin on 7/1/2023 (Server Time) at 02:00:00 with the release of the new Mythic rank - Mythical Immortal.
  4. MLBB x Sanrio Characters collaboration events return for a limited time!`,
        thumb:
          "https://play-lh.googleusercontent.com/UELcKakJhwKhdDJIwpdvd1RjE3ClRXiG0nhChs69fBv-nn5ZkgSp2EkkRTnJYFtYoZyu=w480-h960-rw",
        background:
          "https://play-lh.googleusercontent.com/NAPG77XoYEtmMEGG_OBQFKqLgOHcSwkU6TWNIVZSa_QtwPtUaE3Yquz5oDpnLh3FNCA=w1052-h592-rw",
      },

      {
        title: "Clash of Clans",
        author: "Supercell",
        about: `Get set for a super summer of Clash!
  ● Support your attacks with the new Apprentice Warden troop.
  ● Super Hog Rider's leapt into battle and ready to level your opponents.
  ● And there's new Magic Items, new upgrades, sharper skins and MORE!`,
        thumb:
          "https://play-lh.googleusercontent.com/LByrur1mTmPeNr0ljI-uAUcct1rzmTve5Esau1SwoAzjBXQUby6uHIfHbF9TAT51mgHm=w480-h960-rw",
        background: "https://i.ytimg.com/vi/QHnxnzrwQmk/hqdefault.jpg",
      },

      {
        title: "FIFA Soccer",
        author: "Electronic Arts",
        about:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum quidem consectetur dolore harum autem voluptatibus fugiat ipsa quasi. Vitae delectus numquam provident possimus. Voluptates nobis enim unde quis reiciendis!",
        thumb:
          "https://play-lh.googleusercontent.com/MUc561H_AeA4lUfUzyo0-6ZgikC6xrblMMPcbOTNC61iXb9hbfV9guj5IKiXAMfpumJw=w480-h960-rw",
        background:
          "https://play-lh.googleusercontent.com/XMiY8lwylI_aQ4UHXmofGjybDmHilDTmtfOYNn6-c4nX95hgVtfMRDTTL3z_s6tmfA=w1052-h592-rw",
      },

      {
        title: "Genshin Impact",
        author: "Mihoyo",
        about: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum quidem consectetur dolore harum autem voluptatibus fugiat ipsa quasi. Vitae delectus numquam provident possimus. Voluptates nobis enim unde quis reiciendis!`,
        thumb:
          "https://play-lh.googleusercontent.com/QZ7t5aC4biLc2BwEOKw4vtLPcgo5IWmsi394v_LRxJFrbzOLWjkecSS95lQMe7zZXi5W=w1052-h592-rw",
        background:
          "https://play-lh.googleusercontent.com/YMFqdFlQvvJxd2L5oQlpfD7_8DgtYht3Nn4ThhjN5NpdIXyb69fQKm3RwCVFAAFEKME=w1052-h592-rw",
      },

      {
        title: "Angry Birth Dream Blast",
        author: "Rovio Entertaiment",
        about: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum quidem consectetur dolore harum autem voluptatibus fugiat ipsa quasi. Vitae delectus numquam provident possimus. Voluptates nobis enim unde quis reiciendis!`,
        thumb:
          "https://play-lh.googleusercontent.com/7uH2vasKk4ZFST6SaTfLa1_LNlrbn_cVvO9QUqloqRuKEUSRX9rBwzSwjRV-SlUKwA=w1052-h592-rw",
        background:
          "https://play-lh.googleusercontent.com/sFg_Jiraah9_MbyKnjmTTrGPXq0Q0w_gNByJjWfo3DYKlVseUub17F6WU0XfjcUkMg=w1052-h592-rw",
      },

      {
        title: "Chess - Play and Learn",
        author: "Chess.com",
        about: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum quidem consectetur dolore harum autem voluptatibus fugiat ipsa quasi. Vitae delectus numquam provident possimus. Voluptates nobis enim unde quis reiciendis!`,
        thumb:
          "https://play-lh.googleusercontent.com/eSq1iIxJM1KaChURI31uT3jqXtAOR9bUQuXbxy_9v4N8sERXfY_MqXn9IAEUJ-6KVcAR=w1052-h592-rw",
        background:
          "https://play-lh.googleusercontent.com/98L69rvtf24hDr6OZ6RZgy8uOd4Y938PLj_D9vYNgKrU81WUlTsDgq3_vSkF6f6GyTo=w1052-h592-rw",
      },

      {
        title: "Sudoku",
        author: "Kidult Lovin",
        about: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum quidem consectetur dolore harum autem voluptatibus fugiat ipsa quasi. Vitae delectus numquam provident possimus. Voluptates nobis enim unde quis reiciendis!`,
        thumb:
          "https://play-lh.googleusercontent.com/hYLElG0RAgn60XE6cfgsPPW_JB63PEVWvDtvhipAGvTpxBX5YgLGt3UXvnJ_kRwKhnE=w480-h960-rw",
        background:
          "https://play-lh.googleusercontent.com/hYLElG0RAgn60XE6cfgsPPW_JB63PEVWvDtvhipAGvTpxBX5YgLGt3UXvnJ_kRwKhnE=w480-h960-rw",
      },

      {
        title: "Call od Duty Mobile",
        author: "Ya ndak tau lah kok tanya saya",
        about: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum quidem consectetur dolore harum autem voluptatibus fugiat ipsa quasi. Vitae delectus numquam provident possimus. Voluptates nobis enim unde quis reiciendis!`,
        thumb:
          "https://play-lh.googleusercontent.com/WjXoRzJKWHJ_x52qWYA6ECM70bq3x0vwwYiBhzLXdOIHCo-obdUTztPbskEn0K8_wBs=w480-h960-rw",
        background:
          "https://play-lh.googleusercontent.com/id_1D5YToU_mrB4-H_JtIifWBxCdWJ9El8elb-X8XVTJcsAlTok8DM7cR6E5_6qUavBh=w1052-h592-rw",
      },
      {
        title: "Goddess of Victory",
        author: "Level Infinite",
        about: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum quidem consectetur dolore harum autem voluptatibus fugiat ipsa quasi. Vitae delectus numquam provident possimus. Voluptates nobis enim unde quis reiciendis!`,
        thumb:
          "https://play-lh.googleusercontent.com/PnQbNAd2ZAqMwkpzBW0hAI1xaFQouTO0kc6IFEpGOv1ZLfddoR5wMhRZLzRkcgbF7g=w1052-h592-rw",
        background: "https://i.ytimg.com/vi/dyoRWt9yx2I/hqdefault.jpg",
      },
      {
        title: "Dr. Driving",
        author: "SUD Inc",
        about: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum quidem consectetur dolore harum autem voluptatibus fugiat ipsa quasi. Vitae delectus numquam provident possimus. Voluptates nobis enim unde quis reiciendis!`,
        thumb:
          "https://play-lh.googleusercontent.com/n2CFe-E4Kqoi9vwOHnXKg-Vno0Pod-NoJuYjgLQXcGGbToiA0_feC6a7LIBDB5xVvA=w1052-h592-rw",
        background:
          "https://play-lh.googleusercontent.com/Kem7tLu9fDdlIuo5wYztQurM7Tpz3m2ZXuDEYuLAs0B_LzgUx7o3v44MUxEgPoL5G_k8=w1052-h592-rw",
      },
      {
        title: "Plant vs Zombie",
        author: "Electronic Arts",
        about: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum quidem consectetur dolore harum autem voluptatibus fugiat ipsa quasi. Vitae delectus numquam provident possimus. Voluptates nobis enim unde quis reiciendis!`,
        thumb:
          "https://play-lh.googleusercontent.com/hO7716hh7NCcFauJedDclX-R3Zh9JmbSs8AUU6TP2edGVILlZM7gmyt_8WPCZELiPQA=w480-h960-rw",
        background:
          "https://play-lh.googleusercontent.com/yYh490EI6wGnWZebJvsP6OtlKG0hSRrrSxsyMn04QpSMghWtfWJjRvltbezTnZwT2RM=w1052-h592-rw",
      },
      {
        title: "Pou",
        author: "Zakeh",
        about: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum quidem consectetur dolore harum autem voluptatibus fugiat ipsa quasi. Vitae delectus numquam provident possimus. Voluptates nobis enim unde quis reiciendis!`,
        thumb:
          "https://play-lh.googleusercontent.com/MNOy5QOdhAb8MUrsKd6fYyQGLgZNrKItS31ksNXJoqDfe6WwslnPsszMc5fsFTUIPok=w1052-h592-rw",
        background:
          "https://play-lh.googleusercontent.com/GLsD4csr0R7lHxl6G5DEAej30N37dDB7SLXLYZQMJPdBQH2IbcSzNsPYnsBV9g71BkU=w1052-h592-rw",
      },
      {
        title: "Sonic",
        author: "SEGA",
        about: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum quidem consectetur dolore harum autem voluptatibus fugiat ipsa quasi. Vitae delectus numquam provident possimus. Voluptates nobis enim unde quis reiciendis!`,
        thumb: "https://i.ytimg.com/vi/_fBXsBDIvtA/hqdefault.jpg",
        background:
          "https://play-lh.googleusercontent.com/zgsYaRpr_igs1GfOq9FarZg18OwlvqJ5yU78saHUz8ssMQnrnO0CGPwIZmp_qu8X6El5=w1052-h592-rw",
      },
      {
        title: "Super Mario Run",
        author: "Nitendo",
        about: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum quidem consectetur dolore harum autem voluptatibus fugiat ipsa quasi. Vitae delectus numquam provident possimus. Voluptates nobis enim unde quis reiciendis!`,
        thumb:
          "https://play-lh.googleusercontent.com/e5HMIP0FW9MCoAEGYzji9JsrvyovpZ3StHiIANughp3dovUxdv_eHiYT5bMz38bowOI=w1052-h592-rw",
        background: "https://i.ytimg.com/vi/qjHSn4GwQWY/hqdefault.jpg",
      },

      {
        title: "Talking Tom Cat",
        author: "Outfit7 Limited",
        about: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum quidem consectetur dolore harum autem voluptatibus fugiat ipsa quasi. Vitae delectus numquam provident possimus. Voluptates nobis enim unde quis reiciendis!`,
        thumb:
          "https://play-lh.googleusercontent.com/fyNQbmN9u8uSaea17aq3X7OoeADQ23aZ7Beo06TX6-j6DbAvdn9uC7orI7bVf9j1Xw=w1052-h592-rw",
        background:
          "https://play-lh.googleusercontent.com/7S_1OW32_dnVfWX70o8Awul6ylxyJq2qagbW-g1CsrB811Qw2XmLbRuwdi1voJi1ers9=w1052-h592-rw",
      },
      {
        title: "Real Racing 3",
        author: "Electronic Arts",
        about: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum quidem consectetur dolore harum autem voluptatibus fugiat ipsa quasi. Vitae delectus numquam provident possimus. Voluptates nobis enim unde quis reiciendis!`,
        thumb:
          "https://play-lh.googleusercontent.com/BxaaEt1fL0ATQ2IidQt6hnkfXfj-IP0v-621oAfK62cy352kCB9eWuwLm4tcqkZriz0=w1052-h592-rw",
        background:
          "https://play-lh.googleusercontent.com/5DTwouWtFR4JwxFvtX86SVqhTzHP2TMcd6ImewY5mfDWKFJqkhpsLNMS7ykykVKS-Vs=w1052-h592-rw",
      },
      {
        title: "Freecell",
        author: "Solebon LCC",
        about: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum quidem consectetur dolore harum autem voluptatibus fugiat ipsa quasi. Vitae delectus numquam provident possimus. Voluptates nobis enim unde quis reiciendis!`,
        thumb:
          "https://play-lh.googleusercontent.com/DAog8qM3sgbrACVAsogygPnP9wLBoGnx2wwVouNvhSXmsP5PdKkKb2sXqHXxReXXZUY=w1052-h592-rw",
        background:
          "https://play-lh.googleusercontent.com/DAog8qM3sgbrACVAsogygPnP9wLBoGnx2wwVouNvhSXmsP5PdKkKb2sXqHXxReXXZUY=w1052-h592-rw",
      },
      {
        title: "8 Ball Pool",
        author: "Miniclip.com",
        about: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum quidem consectetur dolore harum autem voluptatibus fugiat ipsa quasi. Vitae delectus numquam provident possimus. Voluptates nobis enim unde quis reiciendis!`,
        thumb:
          "https://play-lh.googleusercontent.com/bPz1guJ6FHF3oIOEy3KqwpaDDKO-hLRaZoyzmM8bLFLN8fWm6L0_EuUnkwv9iqPo3Ag=w480-h960-rw",
        background:
          "https://play-lh.googleusercontent.com/8lxxhxeBeM5dxGu3V4L1P0hMH6U0GpFhyOEqarWLXwz5-Z9rnoppjdD8XSaE8KPfWaxb=w1052-h592-rw",
      },
      {
        title: "Golf Rival",
        author: "Znga",
        about: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum quidem consectetur dolore harum autem voluptatibus fugiat ipsa quasi. Vitae delectus numquam provident possimus. Voluptates nobis enim unde quis reiciendis!`,
        thumb:
          "https://play-lh.googleusercontent.com/kefWpju0GFiejaEZN3afqyZPj_Yv2n31CUIUFl_biV-OF0kL5IDPoHEaHAwpTTgWgw=w1052-h592-rw",
        background:
          "https://play-lh.googleusercontent.com/bPz1guJ6FHF3oIOEy3KqwpaDDKO-hLRaZoyzmM8bLFLN8fWm6L0_EuUnkwv9iqPo3Ag=w480-h960-rw",
      },
      {
        title: "Ping Pong Fury",
        author: "Yakuto",
        about: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum quidem consectetur dolore harum autem voluptatibus fugiat ipsa quasi. Vitae delectus numquam provident possimus. Voluptates nobis enim unde quis reiciendis!`,
        thumb:
          "https://play-lh.googleusercontent.com/28ganb16BBEdV3L12Ns6xIqUbwgDCfe2pNnVco91tWAz41KRINYH4-gUqVEOTnb37ZE=w1052-h592-rw",
        background:
          "https://play-lh.googleusercontent.com/AJ4rv5i-UP8APdCAxMpzzqGSMpISYLtU94ac8_qtx7LP5q0vnlzUCzYSLXrQteuiApg=w1052-h592-rw",
      },
      {
        title: "Basketball Star",
        author: "Miniclip.com",
        about: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum quidem consectetur dolore harum autem voluptatibus fugiat ipsa quasi. Vitae delectus numquam provident possimus. Voluptates nobis enim unde quis reiciendis!`,
        thumb:
          "https://play-lh.googleusercontent.com/bTRRevO3q15YuqGz5Wbvd_O1MK4zQQuc0Gl980yrQO7B0rfPA-KHHMAqN_qLfJKOsw=w1052-h592-rw",
        background:
          "https://play-lh.googleusercontent.com/bTRRevO3q15YuqGz5Wbvd_O1MK4zQQuc0Gl980yrQO7B0rfPA-KHHMAqN_qLfJKOsw=w1052-h592-rw",
      },
      {
        title: "GTA San Andreas",
        author: "Rockstar",
        about: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum quidem consectetur dolore harum autem voluptatibus fugiat ipsa quasi. Vitae delectus numquam provident possimus. Voluptates nobis enim unde quis reiciendis!`,
        thumb:
          "https://play-lh.googleusercontent.com/XRlCpj22PFJuFK43QcE3u5RxmoNUed7YO_zG-6F1PCqjrBIIURbTBDvTgLVVIk5pNeY=w480-h960-rw",
        background:
          "https://play-lh.googleusercontent.com/5ztoNn5hG3iEegbSznA2ehmWRPlfIaL29VTN9JyJAms6DtoVjp41Rdqh_79j6WpCcrqw=w1052-h592-rw",
      },

      {
        title: "Bully",
        author: "Rockstar",
        about: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum quidem consectetur dolore harum autem voluptatibus fugiat ipsa quasi. Vitae delectus numquam provident possimus. Voluptates nobis enim unde quis reiciendis!`,
        thumb:
          "https://play-lh.googleusercontent.com/I3zJDMIIQ6k_iRCC8LsZJhAKbKC8I7f4Mp1lYdZ8Hxk3hvBS1GLsBsmiG80gk5T0c9Ww=w480-h960-rw",
        background:
          "https://play-lh.googleusercontent.com/I3zJDMIIQ6k_iRCC8LsZJhAKbKC8I7f4Mp1lYdZ8Hxk3hvBS1GLsBsmiG80gk5T0c9Ww=w480-h960-rw",
      },
      {
        title: "Hitman Sniper",
        author: "CDE Entertaiment",
        about: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum quidem consectetur dolore harum autem voluptatibus fugiat ipsa quasi. Vitae delectus numquam provident possimus. Voluptates nobis enim unde quis reiciendis!`,
        thumb:
          "https://play-lh.googleusercontent.com/t8VJAWO7ioG9uGhkPOs7q7ZfKjigeMGFBq134VJKLVU_jKDn9VEz9Oqg1iXQ9axI7aE=w480-h960-rw",
        background:
          "https://play-lh.googleusercontent.com/t8VJAWO7ioG9uGhkPOs7q7ZfKjigeMGFBq134VJKLVU_jKDn9VEz9Oqg1iXQ9axI7aE=w480-h960-rw",
      },
      {
        title: "Ludo King",
        author: "Gamation Global",
        about: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum quidem consectetur dolore harum autem voluptatibus fugiat ipsa quasi. Vitae delectus numquam provident possimus. Voluptates nobis enim unde quis reiciendis!`,
        thumb:
          "https://play-lh.googleusercontent.com/g5vtK2Zf55-YRm5RUwF8KGgyZBcmgjI9YzDX1VswfphnZnu4fSxVJGjzkTvVuhdkNg=w1052-h592-rw",
        background:
          "https://play-lh.googleusercontent.com/g5vtK2Zf55-YRm5RUwF8KGgyZBcmgjI9YzDX1VswfphnZnu4fSxVJGjzkTvVuhdkNg=w1052-h592-rw",
      },
      {
        title: "Monopoly Go",
        author: "Scopely",
        about: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum quidem consectetur dolore harum autem voluptatibus fugiat ipsa quasi. Vitae delectus numquam provident possimus. Voluptates nobis enim unde quis reiciendis!`,
        thumb:
          "https://play-lh.googleusercontent.com/7M9FYlUnscfJQZqHE4Yz2HNEzESl3QOUEVAOD3YzC32HuMsbropV8h_tPpaNdRmqrA=w480-h960-rw",
        background:
          "https://play-lh.googleusercontent.com/7M9FYlUnscfJQZqHE4Yz2HNEzESl3QOUEVAOD3YzC32HuMsbropV8h_tPpaNdRmqrA=w480-h960-rw",
      },
      {
        title: "Flappy Bird",
        author: "ShinCom",
        about: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum quidem consectetur dolore harum autem voluptatibus fugiat ipsa quasi. Vitae delectus numquam provident possimus. Voluptates nobis enim unde quis reiciendis!`,
        thumb:
          "https://play-lh.googleusercontent.com/miAaBeF2TbRNWFUEGyFRERzffOvwN1sNY2JZXEy6DcXxqrQu_C76T3fO9Q1FX7wZUQw=w480-h960-rw",
        background:
          "https://play-lh.googleusercontent.com/miAaBeF2TbRNWFUEGyFRERzffOvwN1sNY2JZXEy6DcXxqrQu_C76T3fO9Q1FX7wZUQw=w480-h960-rw",
      },
    ];

    for (const x of data) {
      let id = "gilangif" + Math.ceil(Math.random() * 99999999999999999);
      localStorage.setItem(id, JSON.stringify(x));
    }

    window.location.assign(window.location.origin + window.location.pathname);
  }
});

//
//
// clear local storage

document.getElementById("remove").addEventListener("click", () => {
  const prompt = confirm("Clear all data?");

  if (prompt) {
    localStorage.clear();
    window.location.assign(window.location.origin + window.location.pathname);
  }
});

//
//
// generate list from local storage
const showList = () => {
  const box = document.querySelector(".box-list");
  const del = document.getElementById("delete");
  const edit = document.getElementById("edit");

  if (localStorage.length !== 0) {
    for (let i = 0; i < localStorage.length; i++) {
      let id = localStorage.key(i);
      let data = JSON.parse(localStorage.getItem(id));

      let haha = `
      <div class="game" productid="${id}">
      <img src="${data.thumb}" class="img-list">
      <div class="game-list-title">
      <p class="game-list-title">${data.title}</p>
    </div>
    <p class="game-list-author">${data.author}</p>
    </div>
    `;

      box.innerHTML += haha;
    }
  } else {
    box.style =
      "display: flex; justify-content: center; align-items: center; padding-top: 25%;";
    box.innerHTML = `<h3 style="letter-spacing: 6px">data not available!</h3>`;
  }
};

showList();

//
//
// add new data button
document.querySelector("#add").addEventListener("click", () => {
  const box = document.querySelector(".box-edit");
  const container = document.querySelector(".container");
  const editbtn = document.getElementById("update");

  editbtn.style.display = "none";

  box.classList.toggle("show");
  container.classList.toggle("grayscale");
  container.classList.toggle("blur");
});

//
//
// edit game action
document.getElementById("edit").addEventListener("click", () => {
  console.log("edit mode!");

  let box = document.querySelector(".box-edit");
  let container = document.querySelector(".container");
  let title = document.getElementById("inputTitle");
  let author = document.getElementById("inputAuthor");
  let thumb = document.getElementById("inputThumb");
  let background = document.getElementById("inputBackground");
  let about = document.getElementById("inputAbout");

  let imgThumb = document.getElementById("imgThumbEdit");
  let imgBackground = document.getElementById("imgBackgroundEdit");

  let editbtn = document.getElementById("update");
  let addbtn = document.getElementById("tambah");

  let url = new URL(window.location.href);
  let id = url.searchParams.get("id");

  let game = JSON.parse(localStorage.getItem(id));

  addbtn.style.display = "none";

  title.value = game.title;
  about.value = game.about;
  author.value = game.author;
  thumb.value = game.thumb;
  background.value = game.background;

  imgThumb.src = game.thumb;
  imgBackground.src = game.background;

  editbtn.addEventListener("click", () => {
    let data = {
      title: title.value,
      author: author.value,
      about: about.value,
      thumb: thumb.value,
      background: background.value,
    };

    alert("Data updated!");

    localStorage.removeItem(id);
    localStorage.setItem(id, JSON.stringify(data));
    window.location.assign(window.location.origin + window.location.pathname);
  });

  box.classList.toggle("show");
  container.classList.toggle("grayscale");
  container.classList.toggle("blur");
});

//
//
// delete game action button
document.getElementById("delete").addEventListener("click", () => {
  const prompt = confirm("Delete this data?");

  let games = [...document.querySelectorAll(".game")];
  let url = new URL(window.location.href);
  let id = url.searchParams.get("id");

  if (prompt) {
    games.map((el) => {
      let list = el.getAttribute("productid");

      if (list === id) {
        el.remove();
        localStorage.removeItem(id);
        window.location.assign(
          window.location.origin + window.location.pathname
        );
      }
    });
  }
});

//
//
// add button on edit box
document.querySelector("#tambah").addEventListener("click", () => {
  const title = document.getElementById("inputTitle").value;
  const author = document.getElementById("inputAuthor").value;
  const thumb = document.getElementById("inputThumb").value;
  const background = document.getElementById("inputBackground").value;
  const about = document.getElementById("inputAbout").value;

  let id = "gilangif" + Math.ceil(Math.random() * 99999999999999999);

  let data = { title, author, about, thumb, background };

  localStorage.setItem(id, JSON.stringify(data));
  window.location.assign(window.location.origin + window.location.pathname);
});

//
//
// cancel on box
document.querySelector("#cancel").addEventListener("click", () => {
  const box = document.querySelector(".box-edit");
  const container = document.querySelector(".container");

  box.classList.toggle("show");
  container.classList.toggle("grayscale");
  container.classList.toggle("blur");
});

//
//
// url thumb onchage
const thumbVal = document.getElementById("inputThumb");
thumbVal.addEventListener("change", () => {
  const thumb = document.getElementById("imgThumbEdit");

  thumb.src = thumbVal.value;
});

//
//
// url background onchage
const backgroundVal = document.getElementById("inputBackground");
backgroundVal.addEventListener("change", () => {
  const bg = document.getElementById("imgBackgroundEdit");

  bg.src = backgroundVal.value;
});

//
//
// fungsi onclick tiap element game list
const games = [...document.querySelectorAll(".game")];
games.map((el) => {
  let id = el.getAttribute("productid");

  el.addEventListener("click", () => {
    window.location.assign(`?id=${id}`);
  });
});

// //
// //
// // run list

const preview = document.querySelector(".img-preview");
const title = document.querySelector(".img-preview-title");

let url = new URL(window.location.href);
let id = url.searchParams.get("id");
let data = JSON.parse(localStorage.getItem(id));

let randomPreview = JSON.parse(
  localStorage.getItem(
    localStorage.key(Math.floor(Math.random() * localStorage.length))
  )
);

let btnDelete = document.getElementById("delete");
let btnEdit = document.getElementById("edit");
let btnAdd = document.getElementById("add");

if (id && data) {
  document.body.style.background = `rgba(0, 0, 0, 0.938) url("${data.background}")`;
  document.body.style.backgroundRepeat = `no-repeat`;
  document.body.style.backgroundSize = `cover`;
  preview.src = data.thumb;
  title.innerHTML = data.title;

  document.title = "Hackstore | " + data.title;
} else {
  document.body.style.background = `rgba(0, 0, 0, 0.938) url("${randomPreview.background}")`;
  document.body.style.backgroundRepeat = `no-repeat`;
  document.body.style.backgroundSize = `cover`;
  preview.src = randomPreview.thumb;
  title.innerHTML = randomPreview.title;
  btnDelete.style.display = "none";
  btnEdit.style.display = "none";

  document.title = "Hackstore";
}
document.getElementById("chart").addEventListener("click", () => {
  const title = document.querySelector(".img-preview-title");
  console.log(title.innerText);

  var randomPrice = Math.random() * 50; // Generates a random price between 0 and 50

  var cartItem = {
    title: title.innerText,
    price: randomPrice
  };
  var cartItemJSON = JSON.stringify(cartItem);

  var cartArray = new Array();
  // If the JavaScript shopping cart session is not empty
  if (sessionStorage.getItem('shopping-cart')) {
    cartArray = JSON.parse(sessionStorage.getItem('shopping-cart'));
  }
  cartArray.push(cartItemJSON);

  var cartJSON = JSON.stringify(cartArray);
  sessionStorage.setItem('shopping-cart', cartJSON);
  console.log(cartArray);

  var listchart = document.getElementById("listchart");
  listchart.innerHTML = ""; // Clear the list before adding items

  var totalPrice = 0; // Initialize total price to 0

  cartArray.forEach((itemJSON) => {
    var item = JSON.parse(itemJSON);
    var li = document.createElement("li");
    li.textContent = item.title + " - Price: $" + item.price.toFixed(2); // Display the item price
    listchart.appendChild(li);
    totalPrice += item.price; // Accumulate the item price in the total price
  });

  var itemCount = cartArray.length;
  console.log("Number of Items: " + itemCount);
  var listHeading = document.getElementById("list");
  listHeading.textContent = "Number of Items: " + itemCount + " - Total Price: $" + totalPrice.toFixed(2); // Display the total price

  var chartButton = document.getElementById("chart");
  chartButton.textContent = "Chart ($" + totalPrice.toFixed(2) + ")"; // Update the chart button label with the total price
});

document.getElementById("reset").addEventListener("click", () => {
  sessionStorage.removeItem('shopping-cart'); // Remove the 'shopping-cart' session storage item
  console.log("Cart reset");

  var listchart = document.getElementById("listchart");
  listchart.innerHTML = ""; // Clear the list

  var listHeading = document.getElementById("list");
  listHeading.textContent = "Number of Items: 0 - Total Price: $0.00"; // Set the total price to 0
});