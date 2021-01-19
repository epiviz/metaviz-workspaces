/**
 * Dropdown menu
 */
document.addEventListener("DOMContentLoaded", function () {
  const menus = document.querySelectorAll(".navbar-burger");
  const dropdowns = document.querySelectorAll(".navbar-menu");

  if (menus.length && dropdowns.length) {
    for (var i = 0; i < menus.length; i++) {
      menus[i].addEventListener("click", function () {
        for (var j = 0; j < dropdowns.length; j++) {
          dropdowns[j].classList.toggle("hidden");
        }
      });
    }
  }
});

(function load_workspaces() {

  data = [
    {
      url: "http://metaviz.cbcb.umd.edu/?ws=cd3QlMjvPcr",
      title: "IBD Biopsy",
      description:
        "Understand how the human gut microbiome changes over time in adults and children with Inflammatory Bowel Disease, mainly Crohn’s disease and ulcerative colitis",
    },
    {
      url: "http://metaviz.cbcb.umd.edu/?ws=EiYTz3b59yj",
      title: "T2D Study",
      description:
        "Longitudinal multi-omic measurment study of participants with different likelihoods of developing type 2 diabetes in which individuals followed different diet plans.",
    },
    {
      url: "http://metaviz.cbcb.umd.edu/?ws=MkXngGB3p8o",
      title: "MOMS-PI",
      description:
        "Multi-Omic Microbiome Study-Pregnancy Initiative (MOMS-PI) to understand the impact of the vaginal microbiome on pregnancy and the fetal microbiome.",
    },
  ];

  var ws_dom = "";

  data.forEach(function (ws, i) {
    // ws_dom += `
    //     <div class="md:w-1/3 p-8">
    //         <img class="w-1/3 mx-auto mb-4 full" src="images/epiviz-icon.jpg" alt="Workspace Screenshot">
    //         <h3 class="text-xl font-heading">` + ws.title + `</h3>
    //         <p class="mt-4 text-gray-500 leading-relaxed">` + ws.description + `</p>
    //         <div class="bg-blue-500 hover:bg-blue-700 mx-auto text-white font-bold py-2 px-2 rounded">
    //             <a href="` + epiviz_url + "?ws=" + ws.id + `">Open Workspace</a>
    //         </div>
    //     </div>
    // `
    // <img class="mx-auto mb-4 full" src="images/epiviz-icon.jpg" alt="Workspace Screenshot">

    //     <span class="text-black-500 text-xs mx-auto py-2 px-4 rounded">
    //     Genome : ` +
    //         ws.genomes[0] +
    //     `
    // </span>
    ws_dom +=
      `
            <div class="w-full lg:w-1/3 px-4 mb-4 lg:mb-2">
                <div class="h-full border rounded shadow">
                    <div class="flex items-center justify-between py-3 px-4 border-b">
                        <h3 class="text-lg font-heading">` +
      ws.title +
      `</h3>
                        <span class="py-1 px-3 text-sm text-white font-semibold bg-blue-500 hover:bg-blue-700 rounded-full">
                            <a target="_blank" href="` +
      ws.url +
      `">Open</a>
                        </span>
                    </div>
                    <div class="flex flex-col px-4">
                        <p class="border-b mt-4 text-gray-500 leading-relaxed">` +
      ws.description +
      `</p>
                    </div>
                </div>
            </div>
        `;
  });

  document.querySelector("#workspaceCards").innerHTML = ws_dom;

  // other workspaces

  data = [
    {
      url: "http://metaviz.cbcb.umd.edu/?ws=WTxlx2GwXEv",
      title: "qinJ",
      description: "",
    },
    {
      url: "http://metaviz.cbcb.umd.edu/?ws=UiS62gUq3Qo",
      title: "xie",
      description: "",
    },
    {
      url: "http://metaviz.cbcb.umd.edu/?ws=kfGnUQU1iwg",
      title: "vogtmannE",
      description: "",
    },
    {
      url: "http://metaviz.cbcb.umd.edu/?ws=EeAAVXRS1dn",
      title: "nielsen",
      description: "",
    },
    {
      url: "http://metaviz.cbcb.umd.edu/?ws=ygx32MfGpUj",
      title: "rampelliS",
      description: "",
    },
    {
      url: "http://metaviz.cbcb.umd.edu/?ws=Qw6zAgPng9m",
      title: "raymondF",
      description: "",
    },
    {
      url: "http://metaviz.cbcb.umd.edu/?ws=Iy741e3QHMv",
      title: "vincentC",
      description: "",
    },
    {
      url: "http://metaviz.cbcb.umd.edu/?ws=0NgGautYhWd",
      title: "vatanenT",
      description: "",
    },
    {
      url: "http://metaviz.cbcb.umd.edu/?ws=aaUmQy7Sq7l",
      title: "ohJ",
      description: "",
    },
    {
      url: "http://metaviz.cbcb.umd.edu/?ws=McD3WwFPsks",
      title: "qinN",
      description: "",
    },
    {
      url: "http://metaviz.cbcb.umd.edu/?ws=0R0RRUsZHts",
      title: "obregon",
      description: "",
    },
    {
      url: "http://metaviz.cbcb.umd.edu/?ws=IgM8jLUUyuk",
      title: "karlssonFH",
      description: "",
    },
    {
      url: "http://metaviz.cbcb.umd.edu/?ws=Gjyzh3lhVLh",
      title: "heitz",
      description: "",
    },
    {
      url: "http://metaviz.cbcb.umd.edu/?ws=GBQiPD2Wulu",
      title: "chngKR",
      description: "",
    },
    {
      url: "http://metaviz.cbcb.umd.edu/?ws=eO6qQvPr5Ss",
      title: "fengQ",
      description: "",
    },
    {
      url: "http://metaviz.cbcb.umd.edu/?ws=oNdHo4RUR4k",
      title: "castro",
      description: "",
    },
    {
      url: "http://metaviz.cbcb.umd.edu/?ws=mMZYA4lWI7u",
      title: "britolIL_oral",
      description: "",
    },
    {
      url: "http://metaviz.cbcb.umd.edu/?ws=QyF3mE0098k",
      title: "hmp_nasal",
      description: "",
    },
    {
      url: "http://metaviz.cbcb.umd.edu/?ws=0RiAB0AON2p",
      title: "britolIL",
      description: "",
    },
    {
      url: "http://metaviz.cbcb.umd.edu/?ws=49wgkrTOK7r",
      title: "hmp_stool",
      description: "",
    },
    {
      url: "http://metaviz.cbcb.umd.edu/?ws=cRKCeTRs63m",
      title: "schirmerM",
      description: "",
    },
    {
      url: "http://metaviz.cbcb.umd.edu/?ws=offBDtBpI4s",
      title: "hmp_oral",
      description: "",
    },
    {
      url: "http://metaviz.cbcb.umd.edu/?ws=cLfhWhwBpcp",
      title: "lomanNJ",
      description: "",
    },
  ];

  var ws_dom = "";

  data.forEach(function (ws, i) {
    // ws_dom += `
    //     <div class="md:w-1/3 p-8">
    //         <img class="w-1/3 mx-auto mb-4 full" src="images/epiviz-icon.jpg" alt="Workspace Screenshot">
    //         <h3 class="text-xl font-heading">` + ws.title + `</h3>
    //         <p class="mt-4 text-gray-500 leading-relaxed">` + ws.description + `</p>
    //         <div class="bg-blue-500 hover:bg-blue-700 mx-auto text-white font-bold py-2 px-2 rounded">
    //             <a href="` + epiviz_url + "?ws=" + ws.id + `">Open Workspace</a>
    //         </div>
    //     </div>
    // `
    // <img class="mx-auto mb-4 full" src="images/epiviz-icon.jpg" alt="Workspace Screenshot">

    //     <span class="text-black-500 text-xs mx-auto py-2 px-4 rounded">
    //     Genome : ` +
    //         ws.genomes[0] +
    //     `
    // </span>
    ws_dom +=
      `
            <div class="w-full lg:w-1/3 px-4 mb-4 lg:mb-2">
                <div class="h-full border rounded shadow">
                    <div class="flex items-center justify-between py-3 px-4 border-b">
                        <h3 class="text-lg font-heading">` +
      ws.title +
      `</h3>
                        <span class="py-1 px-3 text-sm text-white font-semibold bg-blue-500 hover:bg-blue-700 rounded-full">
                            <a target="_blank" href="` +
      ws.url +
      `">Open</a>
                        </span>
                    </div>
                    <div class="flex flex-col px-4">
                        <p class="border-b mt-4 text-gray-500 leading-relaxed">` +
      ws.description +
      `</p>
                    </div>
                </div>
            </div>
        `;
  });

  document.querySelector("#otherWSCards").innerHTML = ws_dom;
})();
