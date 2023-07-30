// components/ContentSection.tsx

import React from 'react';

const ContentSection: React.FC = () => {
  return (
    <div className="content-section">
      <h2>Content Section</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis hendrerit urna sit amet
        justo varius, nec congue felis luctus. Suspendisse ut velit non erat fringilla consequat
        sit amet a orci. Mauris eu sagittis neque.
      </p>
      <img
        src="https://via.placeholder.com/400" // Replace this URL with the actual image URL
        alt="Placeholder"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
};

export default ContentSection;
