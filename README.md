Here’s a comprehensive Confluence article draft you can use for Mutation Testing in ReactJS/React Native using Stryker. It covers every aspect from setup to interpreting reports, including Node 18 compatibility, installation, configuration, and usage.

⸻

🧬 Mutation Testing in ReactJS/React Native with Stryker

📌 Overview

Mutation testing is a powerful technique to evaluate the effectiveness of your unit tests. Instead of just checking if code runs without errors, mutation testing checks if your tests can catch intentional code changes (mutants) that simulate potential bugs.

We will be using Stryker Mutation Testing — a powerful tool that supports JavaScript, TypeScript, ReactJS, and React Native projects.

⸻

✅ Prerequisites
	•	Node.js: v18.x
	•	Package Manager: npm or yarn
	•	Project Type: ReactJS or React Native
	•	Test Runner: Jest (React Native default) or any supported one

⸻

⚙️ Installation

1. Install Stryker CLI globally (optional)

npm install -g stryker-cli

2. Install Stryker locally in your project

Use the Stryker preset for Jest if you’re using React or React Native (Jest is the common test runner):

npm install --save-dev @stryker-mutator/core @stryker-mutator/jest-runner jest

If you’re using TypeScript, also install:

npm install --save-dev @stryker-mutator/typescript-checker


⸻

🛠️ Configuration

Run this command to create the config file:

npx stryker init

This will ask questions and create a stryker.config.js or stryker.conf.json file.

Sample stryker.config.js for React/React Native with Jest:

/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutator: {
    name: 'javascript',
  },
  testRunner: 'jest',
  jest: {
    projectType: 'custom',
    config: require('./jest.config.js'),
  },
  reporters: ['html', 'clear-text', 'progress'],
  coverageAnalysis: 'off',
  mutate: ['src/**/*.js', '!src/**/*.test.js'], // exclude test files
  thresholds: {
    high: 80,
    low: 60,
    break: 50,
  },
};

Explanation of config:

Field	Description
mutator.name	Which language mutator to use (e.g., javascript, typescript)
testRunner	Usually jest for React projects
jest.config	Path to your Jest config file
mutate	Files to mutate. Avoid mutating test files
reporters	Output formats: HTML, terminal (clear-text), etc.
coverageAnalysis	Often set to 'off' for Jest (to avoid issues)
thresholds	Define mutation score alerts


⸻

▶️ Running Mutation Tests

Run all tests with mutation:

npx stryker run

Run mutation test on a specific file:

npx stryker run --mutate src/components/Button.js

You can also add an npm script:

"scripts": {
  "mutation": "stryker run"
}


⸻

📊 Understanding Stryker Reports

Stryker generates multiple reports in the reports/mutation folder.

HTML Report

Open:

open reports/mutation/mutation.html

Key Metrics:
	•	Mutation Score: Percentage of mutants killed (higher is better)
	•	Killed Mutants: Caught by tests ✅
	•	Survived Mutants: Not caught by any test ❌
	•	No Coverage: Code not covered by any test at all ⚠️
	•	Timeout / Ignored: Tests that failed due to timeout or were ignored

Goal: Mutation Score > 80%. Improve tests for “survived” mutants.

⸻

🧪 Mutation Operators (Examples)

Mutation	What It Does	Example
Arithmetic Operator Replacement	+ → -	a + b → a - b
Conditional Boundary	> → >=	a > b → a >= b
Logical Operator Replacement	&& → `	
Equality Operator	=== → !==	a === b → a !== b


⸻

🚨 Tips & Troubleshooting
	•	Use coverageAnalysis: 'off' with Jest to avoid performance issues.
	•	If using React Native, ensure metro bundler doesn’t interfere with file watching.
	•	If Stryker crashes due to memory: try limiting files with mutate.

⸻

🔄 Example Workflow for React Component
	1.	Create a component Button.js and test file Button.test.js
	2.	Configure Stryker as above
	3.	Run:

npx stryker run --mutate src/components/Button.js


	4.	Open report and fix any survived mutants by enhancing test cases.

⸻

📦 Optional Plugins

You can explore other plugins if needed:

npm install --save-dev @stryker-mutator/html-reporter @stryker-mutator/typescript-checker


⸻

📚 References
	•	Stryker Docs
	•	Stryker for Jest
	•	Mutation Testing Intro

⸻

💬 Summary

Mutation testing helps you verify the strength of your unit tests beyond code coverage. Stryker makes it seamless to integrate into React and React Native projects with Jest, giving deep insights into untested or weakly tested logic. Integrate it into your CI or run regularly to maintain test quality.

⸻

Would you like this in markdown, Confluence wiki format, or want it converted into a downloadable PDF or .confluence XML?