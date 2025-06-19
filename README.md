Absolutely! Here’s the final Confluence article version with all your points integrated — focusing on unit test case creation using GitLab Duo, handling failure cases, mutation improvement, and practical constraints within Barclays GitLab Duo environment.

⸻

🧪 Writing & Updating Unit Test Cases Using GitLab Duo (React / React Native / Any Language)

📌 Objective

This article explains how to create and update unit test cases using GitLab Duo for React, React Native, or any language, with an emphasis on:
	•	Increasing test coverage
	•	Improving mutation score
	•	Handling AI limitations within Barclays GitLab
	•	Ensuring test consistency and efficiency

⸻

🧠 What is GitLab Duo?

GitLab Duo is GitLab’s AI-powered assistant that helps developers:
	•	Write unit and integration tests
	•	Identify untested branches or mutators
	•	Suggest improvements to failing or weak tests
	•	Automate repetitive testing workflows

⸻

✅ Best Practice: Give GitLab Duo a Reference Format First

❗ Always start by sharing a sample test case format that you want Duo to follow.

This ensures consistency and avoids random structure or missing imports in generated tests.

Example Prompt:

Here is the test format I use. Please follow this structure when writing all future test cases.

Then paste:

// SampleTest.test.tsx
import { render } from '@testing-library/react';
import { SampleComponent } from './SampleComponent';

describe('SampleComponent', () => {
  it('should render correctly', () => {
    const { getByText } = render(<SampleComponent />);
    expect(getByText('Hello')).toBeTruthy();
  });
});


⸻

✍️ Writing Unit Tests With Duo

Steps:
	1.	Open the source file in GitLab.
	2.	Activate GitLab Duo Chat.
	3.	Paste a prompt like:

Write Jest unit tests for this component. Follow the format I shared earlier.


	4.	GitLab Duo will generate matching test cases.
	5.	Run them locally.

⸻

🛠 If Generated Test Cases Fail

If Duo-generated tests fail, follow this retry loop:

⛔ Step 1: Test Fails

Paste the exact error from your terminal.

💬 Prompt:

The following test case failed. Here's the test and the error. Fix the test.

Then paste:
	•	The failing test case
	•	The error output

📌 Why?

Providing the exact error message helps Duo pinpoint the mistake — especially with type errors, undefined mocks, or broken logic.

⸻

🧬 Mutation Testing Support

Tools:
	•	JS/TS: StrykerJS
	•	Java: Pitest
	•	Python: MutPy

Run:

npx stryker run

If the mutation score does not improve:

⛔ Step 1: Score Fails to Improve

💬 Prompt:

This test case did not increase mutation score. The following conditional mutator is still surviving. Here's the file and test. Improve it to kill the mutant.

Then paste:
	•	The function/file under test
	•	The test case
	•	The mutation report or error
(e.g., ConditionalExpressionMutator survived in function X)

⸻

⚠️ GitLab Duo Limitations at Barclays

Due to GitLab Duo limits in Barclays, keep in mind:
	•	Duo can handle limited file size / content at once
	•	It’s best to clearly say up front:
“I will send the file, the test case, and the error separately.”
	•	Send:
	1.	Component/function file
	2.	Existing test case
	3.	Error output or mutation result

This avoids context cutoff or unprocessed data.

⸻

💡 Prompt Templates

Scenario	Prompt
Write tests	Write unit tests for this function. Use the format I provided.
Fix broken test	This test is failing. Fix it based on this error.
Mutation survived	This test didn’t improve mutation score. Fix it to kill this mutator: [mutator info].
Full loop	Here’s the file, current test, and the mutation error. Improve test to kill the mutant.


⸻

📂 File Structure & Commit Best Practices
	•	Place test files alongside source files using .test.js, .spec.tsx, etc.
	•	Prefix commits with [test] or [mutation] for traceability.
	•	Run tests and mutation checks in CI (.gitlab-ci.yml):

test:
  script:
    - npm run test:coverage
    - npx stryker run
  coverage: '/All files\s*\|\s*(\d+%)/'


⸻

📌 Final Tips

Tip	Why
Start with a test format	Helps Duo maintain structure
Send error logs	Enables precise debugging
Specify failed mutator	AI can target exact logic
Break large input into parts	Barclays Duo handles smaller chunks better


⸻

📚 References
	•	GitLab Duo Documentation
	•	Stryker Mutation Testing
	•	Jest
	•	React Testing Library

⸻

✅ Summary

By using GitLab Duo smartly with references, structured prompts, and feedback loops, you can:
	•	Rapidly build high-quality test suites
	•	Improve both coverage and mutation resilience
	•	Work effectively within AI assistant limitations

🎯 AI helps, but human context makes it powerful. Feed Duo the right input for the best output.

⸻

Would you like a downloadable .confluence or .docx version of this page for upload, or a collapsible version using Confluence macros?