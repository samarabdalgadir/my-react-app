import React, { useState } from 'react';

const FeedbackForm: React.FC = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // تمنع إعادة تحميل الصفحة
    console.log('Feedback:', feedback); // تسجيل في الكونسول
    setFeedback(''); // تفريغ الحقل بعد الإرسال
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Leave Your Feedback</h3>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        rows={4}
        cols={40}
        placeholder="Write your feedback here..."
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
