import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>
      Congratulations! You have won the prize! Please follow the insrtuctions
      below to sign and get access to out benefits system.
    </p>
  </div>
);

export default EmailTemplate;
