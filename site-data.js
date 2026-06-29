window.siteData = {
  defaultLanguage: "zh",
  lastUpdated: "2026-06-30",

  shared: {
    photo: "assets/profile.jpg",
    links: [
      { key: "email", label: { zh: "邮箱", en: "Email" }, url: "mailto:zhangts22@mails.tsinghua.edu.cn", style: "primary" },
      {
        key: "scholar",
        label: { zh: "Google Scholar", en: "Google Scholar" },
        url: "https://scholar.google.com/citations?hl=en&user=djUbDjQAAAAJ&view_op=list_works",
        style: "secondary"
      },
      { key: "github", label: { zh: "GitHub", en: "GitHub" }, url: "https://github.com/aurorasolitude", style: "secondary" },
      { key: "cv", label: { zh: "简历", en: "CV" }, url: "assets/cv.pdf", style: "secondary" }
    ]
  },

  ui: {
    zh: {
      navAbout: "简介",
      navEducation: "教育",
      navExperience: "经历",
      navPublications: "论文",
      navAwards: "奖项",
      navContact: "联系",
      sectionNews: "近期动态",
      sectionEducation: "教育经历",
      sectionExperience: "实习与研究经历",
      sectionPublications: "发表文章",
      conferencePapers: "会议论文",
      technicalReports: "技术报告",
      sectionAwards: "所获奖项",
      sectionContact: "联系方式",
      lastUpdated: "最后更新",
      languageToggle: "EN",
      photoAltSuffix: "的个人照片"
    },
    en: {
      navAbout: "About",
      navEducation: "Education",
      navExperience: "Experience",
      navPublications: "Publications",
      navAwards: "Awards",
      navContact: "Contact",
      sectionNews: "Recent Updates",
      sectionEducation: "Education",
      sectionExperience: "Internships & Research Experience",
      sectionPublications: "Publications",
      conferencePapers: "Conference Papers",
      technicalReports: "Technical Reports",
      sectionAwards: "Awards",
      sectionContact: "Contact",
      lastUpdated: "Last updated",
      languageToggle: "中文",
      photoAltSuffix: "'s profile photo"
    }
  },

  languages: {
    zh: {
      profile: {
        name: "张天舒",
        shortName: "张天舒",
        title: "清华大学软件学院硕士研究生",
        affiliation: "清华大学软件学院（THSS）",
        bio: "我即将在清华大学软件学院攻读硕士学位，导师为闻立杰老师；此前在清华大学软件学院获得学士学位。我的研究兴趣主要聚焦于多模态大模型，尤其关注如何提升模型的多模态理解能力。",
        interests: ["多模态大模型", "多模态理解", "大语言模型"],
        contactNote: "欢迎就研究合作、实习机会或学术交流联系我。"
      },

      news: [
        {
          date: "2026.06",
          title: "🔥 论文被 ECCV 2026 接收！",
          description: "我们的论文 VisWordBench: Bridging the Gap in Cross-modal Reasoning for Multimodal Large Language Models 被 ECCV 2026 接收。"
        },
        {
          date: "2026.06",
          title: "🎉 从清华大学软件学院毕业！",
          description: "获评清华大学优良毕业生、软件学院优秀毕业生。"
        }
      ],

      education: [
        {
          date: "2026 - 2028（预计）",
          title: "硕士研究生",
          organization: "清华大学软件学院",
          location: "北京，中国",
          description: "导师：闻立杰老师。研究方向为多模态大模型与多模态理解。"
        },
        {
          date: "2022 - 2026",
          title: "学士",
          organization: "清华大学软件学院",
          location: "北京，中国",
          description: ""
        }
      ],

      experience: [
        {
          date: "2025.05 - 至今",
          title: "算法实习生",
          organization: "Z.ai",
          location: "北京，中国",
          description: "主要负责多模态大模型基座训练工作，参与 GLM-4.1V-Thinking、GLM-4.5V、GLM-4.6V、GLM-5V-Turbo 等模型研发。"
        }
      ],

      conferencePapers: [
        {
          title: "ICT: Image-Object Cross-Level Trusted Intervention for Mitigating Object Hallucination in Large Vision-Language Models",
          authors: [
            { text: "J Chen*, " },
            { text: "T Zhang*", me: true },
            { text: ", S Huang, Y Niu, L Zhang, L Wen, X Hu" }
          ],
          venue: "CVPR 2025, pp. 4209-4221",
          status: "会议论文",
          links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2411.15268" }
          ]
        },
        {
          title: "OmniDPO: A Preference Optimization Framework to Address Omni-Modal Hallucination",
          authors: [
            { text: "J Chen*, " },
            { text: "T Zhang*", me: true },
            { text: ", S Huang, Y Niu, C Sun, R Zhang, G Zhou, L Wen" }
          ],
          venue: "AAAI 2026",
          status: "会议论文",
          links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2509.00723" }
          ]
        },
        {
          title: "Do We Really Need External Tools to Mitigate Hallucinations? SIRA: Shared-Prefix Internal Reconstruction of Attribution",
          authors: [
            { text: "T Qin, J Chen, Y Shi, " },
            { text: "T Zhang", me: true },
            { text: ", Q Ju, L Wen" }
          ],
          venue: "arXiv preprint arXiv:2605.14621",
          status: "预印本",
          links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2605.14621" }
          ]
        }
      ],

      technicalReports: [
        {
          title: "GLM-4.5V and GLM-4.1V-Thinking: Towards Versatile Multimodal Reasoning with Scalable Reinforcement Learning",
          authors: [
            { text: "W Hong, W Yu, ... " },
            { text: "T Zhang", me: true },
            { text: " (Contributor)", italic: true },
            { text: ", ..." }
          ],
          venue: "Technical report, 2025",
          status: "",
          links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2507.01006" }
          ]
        },
        {
          title: "GLM-5V-Turbo: Toward a Native Foundation Model for Multimodal Agents",
          authors: [
            { text: "W Hong, X Gu, Z Pan, Z Yang, Y Wang, ... " },
            { text: "T Zhang", me: true },
            { text: " (Contributor)", italic: true },
            { text: ", ..." }
          ],
          venue: "Technical report, 2026",
          status: "",
          links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2604.26752" }
          ]
        }
      ],

      awards: [
        {
          year: "2026",
          title: "清华大学优良毕业生",
          organization: "清华大学",
          description: ""
        },
        {
          year: "2026",
          title: "软件学院优秀毕业生",
          organization: "清华大学软件学院",
          description: ""
        },
        {
          year: "2025",
          title: "国家奖学金",
          organization: "中华人民共和国教育部",
          description: ""
        },
        {
          year: "2024",
          title: "清华大学综合优秀奖学金",
          organization: "清华大学",
          description: ""
        },
        {
          year: "2023",
          title: "清华大学学业优秀奖学金",
          organization: "清华大学",
          description: ""
        }
      ]
    },

    en: {
      profile: {
        name: "Tianshu Zhang",
        shortName: "Tianshu Zhang",
        title: "Incoming M.S. Student, School of Software, Tsinghua University",
        affiliation: "School of Software, Tsinghua University (THSS)",
        bio: "I am an incoming M.S. student at the School of Software, Tsinghua University, advised by Prof. Lijie Wen. I received my B.S. degree from the same school. My research interests focus on multimodal large language models, with a particular emphasis on improving multimodal understanding.",
        interests: ["Multimodal LLMs", "Multimodal Understanding", "Large Language Models"],
        contactNote: "Feel free to contact me about research collaboration, internship opportunities, or academic exchange."
      },

      news: [
        {
          date: "2026.06",
          title: "🔥 Paper accepted to ECCV 2026!",
          description: "Our paper VisWordBench: Bridging the Gap in Cross-modal Reasoning for Multimodal Large Language Models was accepted to ECCV 2026."
        },
        {
          date: "2026.06",
          title: "🎉 Graduated from the School of Software, Tsinghua University!",
          description: "Recognized as an Outstanding Graduate of Tsinghua University and an Outstanding Graduate of the School of Software."
        }
      ],

      education: [
        {
          date: "2026 - 2028 (Expected)",
          title: "M.S. Student",
          organization: "School of Software, Tsinghua University",
          location: "Beijing, China",
          description: "Advisor: Prof. Lijie Wen. Research direction: multimodal large language models and multimodal understanding."
        },
        {
          date: "2022 - 2026",
          title: "B.S.",
          organization: "School of Software, Tsinghua University",
          location: "Beijing, China",
          description: ""
        }
      ],

      experience: [
        {
          date: "2025.05 - Present",
          title: "Algorithm Intern",
          organization: "Z.ai",
          location: "Beijing, China",
          description: "Working on foundation training for multimodal large language models, with contributions to GLM-4.1V-Thinking, GLM-4.5V, GLM-4.6V, GLM-5V-Turbo, and related models."
        }
      ],

      conferencePapers: [
        {
          title: "ICT: Image-Object Cross-Level Trusted Intervention for Mitigating Object Hallucination in Large Vision-Language Models",
          authors: [
            { text: "J Chen*, " },
            { text: "T Zhang*", me: true },
            { text: ", S Huang, Y Niu, L Zhang, L Wen, X Hu" }
          ],
          venue: "CVPR 2025, pp. 4209-4221",
          status: "Conference Paper",
          links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2411.15268" }
          ]
        },
        {
          title: "OmniDPO: A Preference Optimization Framework to Address Omni-Modal Hallucination",
          authors: [
            { text: "J Chen*, " },
            { text: "T Zhang*", me: true },
            { text: ", S Huang, Y Niu, C Sun, R Zhang, G Zhou, L Wen" }
          ],
          venue: "AAAI 2026",
          status: "Conference Paper",
          links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2509.00723" }
          ]
        },
        {
          title: "Do We Really Need External Tools to Mitigate Hallucinations? SIRA: Shared-Prefix Internal Reconstruction of Attribution",
          authors: [
            { text: "T Qin, J Chen, Y Shi, " },
            { text: "T Zhang", me: true },
            { text: ", Q Ju, L Wen" }
          ],
          venue: "arXiv preprint arXiv:2605.14621",
          status: "Preprint",
          links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2605.14621" }
          ]
        }
      ],

      technicalReports: [
        {
          title: "GLM-4.5V and GLM-4.1V-Thinking: Towards Versatile Multimodal Reasoning with Scalable Reinforcement Learning",
          authors: [
            { text: "W Hong, W Yu, ... " },
            { text: "T Zhang", me: true },
            { text: " (Contributor)", italic: true },
            { text: ", ..." }
          ],
          venue: "Technical report, 2025",
          status: "",
          links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2507.01006" }
          ]
        },
        {
          title: "GLM-5V-Turbo: Toward a Native Foundation Model for Multimodal Agents",
          authors: [
            { text: "W Hong, X Gu, Z Pan, Z Yang, Y Wang, ... " },
            { text: "T Zhang", me: true },
            { text: " (Contributor)", italic: true },
            { text: ", ..." }
          ],
          venue: "Technical report, 2026",
          status: "",
          links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2604.26752" }
          ]
        }
      ],

      awards: [
        {
          year: "2026",
          title: "Outstanding Graduate of Tsinghua University",
          organization: "Tsinghua University",
          description: ""
        },
        {
          year: "2026",
          title: "Outstanding Graduate of the School of Software",
          organization: "School of Software, Tsinghua University",
          description: ""
        },
        {
          year: "2025",
          title: "National Scholarship",
          organization: "Ministry of Education of the People's Republic of China",
          description: ""
        },
        {
          year: "2024",
          title: "Comprehensive Excellence Scholarship",
          organization: "Tsinghua University",
          description: ""
        },
        {
          year: "2023",
          title: "Academic Excellence Scholarship",
          organization: "Tsinghua University",
          description: ""
        }
      ]
    }
  }
};
