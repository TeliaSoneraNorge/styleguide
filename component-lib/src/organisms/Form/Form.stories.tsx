import React, { useState } from 'react';
import Form from './Form';
import { Button } from '../../index';

export default {
  title: 'Component library|Organisms/Form',
  component: Form,
};


export const defautl = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setShowSuccessMessage(true)
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.FormRow>
          <Form.FormColumn>
            <label className="label label--gray-text textbox-with-label">
              <span className="textbox-with-label__label-text">Phone Number</span>
              <input type="text" className="textbox-with-label__input" placeholder="number" />
            </label>
          </Form.FormColumn>
        </Form.FormRow>
        <Form.FormRow>
          <Form.FormColumn>
            <label className="label label--gray-text textbox-with-label">
              <span className="textbox-with-label__label-text">Password</span>
              <input type="password" className="textbox-with-label__input" placeholder="password" />
            </label>
          </Form.FormColumn>
        </Form.FormRow>
        <Form.FormRow>
          <Button text="Login" type="submit" />
        </Form.FormRow>
      </Form>
      {showSuccessMessage && <Form.FormSuccessMessage>All done!</Form.FormSuccessMessage>}
    </div>
  );
}

// export default class SimpleLogin extends React.Component {
//   state = {
//     showSuccessMessage: false,
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.setState({
//       showSuccessMessage: true,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <Form onSubmit={this.handleSubmit}>
//           <Form.FormRow>
//             <Form.FormColumn>
//               <label className="label label--gray-text textbox-with-label">
//                 <span className="textbox-with-label__label-text">Phone Number</span>
//                 <input type="text" className="textbox-with-label__input" placeholder="number" />
//               </label>
//             </Form.FormColumn>
//           </Form.FormRow>
//           <Form.FormRow>
//             <Form.FormColumn>
//               <label className="label label--gray-text textbox-with-label">
//                 <span className="textbox-with-label__label-text">Password</span>
//                 <input type="password" className="textbox-with-label__input" placeholder="password" />
//               </label>
//             </Form.FormColumn>
//           </Form.FormRow>
//           <Form.FormRow>
//             <Button text="Login" type="submit" />
//           </Form.FormRow>
//         </Form>
//         {this.state.showSuccessMessage && <Form.FormSuccessMessage>All done!</Form.FormSuccessMessage>}
//       </div>
//     );
//   }
// }