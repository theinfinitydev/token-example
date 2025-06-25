# LLM Lifecycle Cost Calculator

 <!-- TODO: Replace with a real screenshot or GIF of the app -->

An interactive web application designed to demystify the compute and token costs across the three main phases of a Large Language Model's lifecycle: **Pre-training**, **Fine-Tuning**, and **Inference**.

This tool is built with pure, framework-free **Vanilla JavaScript, HTML, and CSS** to be lightweight, fast, and easy to understand.

### 🌐 **[Live Demo Here](https://your-username.github.io/your-repo-name/)**

---

## 🎯 About The Project

The true cost and scale of an LLM project are often abstract and misunderstood. Phrases like "7 Billion parameters" or "trillions of tokens" are hard to grasp. This calculator aims to bridge that gap by providing a hands-on tool for developers, MLOps engineers, and ML enthusiasts.

Its core philosophy is to:

1.  **Provide a Systemic View:** Show that a "token" is not just a unit for an API call, but the fundamental unit of scale that drives the immense costs of training and customization.
2.  **Translate Abstract to Concrete:** Demystify complex concepts like computational cost (FLOPs) by tying them to tangible inputs like model size and dataset size.
3.  **Encourage Exploration:** Allow users to interactively tweak parameters and immediately see how costs can change dramatically, fostering a deeper intuition for LLM economics.

---

## ✨ Features

-   **Three Distinct Calculators:** One for each phase of the LLM lifecycle.
-   **Pre-training Simulator:**
    -   Calculate the approximate **FLOPs** (Floating Point Operations) required to train a model from scratch based on the [Chinchilla Scaling Laws](https://arxiv.org/abs/2203.15556) (`6 * Parameters * Tokens`).
    -   Compare the required compute to training well-known models like GPT-3.
-   **Fine-Tuning Simulator:**
    -   Estimate the cost of customizing a pre-trained model on your own data.
    -   Visually demonstrate the massive cost difference between **Full Fine-Tuning** and **Parameter-Efficient Fine-Tuning (PEFT/LoRA)**.
-   **Inference Cost Calculator:**
    -   Calculate the real-time token cost of a single API call.
    -   Breaks down costs into **input (prompt) tokens** and **output (completion) tokens**.
-   **Flexible Parameter Input:** Use convenient preset buttons (1B, 7B, 70B) or enter any custom model parameter count.
-   **Multi-language Support (i18n):**
    -   Interface available in English, Turkish (Türkçe), and Spanish (Español).
    -   Remembers your language preference using `localStorage`.
-   **Educational:** Each section includes detailed explanations of *why* each metric matters.
-   **Zero Dependencies:** Built with 100% Vanilla JS, HTML, and CSS. No frameworks, no libraries, no build steps.

---

## 🛠️ Technology Stack

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![No Frameworks](https://img.shields.io/badge/framework-none-blueviolet?style=for-the-badge)
![GitHub Pages](https://img.shields.io/badge/deployed%20on-GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)

---

## 🚀 Getting Started

Because this project uses no build tools or external dependencies, running it locally is incredibly simple.

### Prerequisites

All you need is a modern web browser.

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd your-repo-name
    ```
3.  Open the `index.html` file directly in your browser.
    -   On macOS: `open index.html`
    -   On Windows/Linux: Simply double-click the file.

And that's it! The application will be running locally.

---

## 💡 How It Works

The calculator uses widely accepted, simplified formulas to provide its estimations:

-   **Pre-training FLOPs:** The calculation is based on the Chinchilla paper's finding that the optimal compute is roughly `FLOPs ≈ 6 * N * D`, where `N` is the number of model parameters and `D` is the number of tokens in the training dataset.

-   **Fine-Tuning Cost:**
    -   For **Full Fine-Tuning**, the cost is modeled as the total number of tokens processed: `Dataset Tokens * Number of Epochs`. This represents the data that must pass through the full model for each training cycle.
    -   For **PEFT (LoRA)**, the tool provides a qualitative explanation, noting that the compute cost is drastically lower (often >99% reduction) as only a tiny fraction of parameters are trained.

-   **Inference Cost:** This is a direct sum of the tokens in the input prompt and the generated output: `Total Tokens = Input Tokens + Output Tokens`.

-   **Token Estimation:** For simplicity, token count for a given text is approximated using the common rule of thumb: `Tokens ≈ Character Count / 4`. A note in the app footer clarifies this is an approximation.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` file for more information.

---

## 🙏 Acknowledgements

-   [Chinchilla Paper](https://arxiv.org/abs/2203.15556) for the scaling laws.
-   The open-source community for providing the tools and knowledge to build great things.