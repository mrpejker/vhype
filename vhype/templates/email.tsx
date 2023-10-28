import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  rewardIndex: number;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  rewardIndex,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>
      Congratulations! You have won the prize! Please follow the insrtuctions
      below to sign and get access to out benefits system.
    </p>
    <div>
      <h2>Instructions</h2>
      <ol>
        <li>Click on the link below</li>
        <li>Sign the transaction</li>
        <li>Get access to the benefits system</li>
      </ol>
    </div>
  </div>
);

export default EmailTemplate;
