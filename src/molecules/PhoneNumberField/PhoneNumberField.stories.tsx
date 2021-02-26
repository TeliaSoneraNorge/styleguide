import React from 'react';
import { PhoneNumberField } from './index';
import { withDesign } from 'storybook-addon-designs';
import { CountryCode } from './PhoneNumberField';

export default {
  component: PhoneNumberField,
  title: 'Component library/Molecules/Phone Number Field',
  decorators: [withDesign],
};

const countryCodes: CountryCode[] = [
  { label: '+47 Norge', value: '+47' },
  { label: '+46 Sverige', value: '+46' },
  { label: '+358 Finland', value: '+358' },
];

export const Default = () => {
  const [number, setNumber] = React.useState('');
  const [countryCode, setCountryCode] = React.useState('+47');
  const [error, setError] = React.useState(false);

  const checkValidations = (e: React.FocusEvent<HTMLInputElement>) => {
    if (number.length < 8) {
      setError(true);
    }
  };

  React.useEffect(() => {
    if (number.length > 8) setError(true);
    else setError(false);
  }, [number]);

  return (
    <>
      <h3>PhoneNumberField</h3>
      <a href="https://www.figma.com/file/rYnkFzvOksz738YsHGyRqa/Phone-Number-Field?node-id=2%3A2">Figma skisser</a>
      <p></p>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%' }}>
          <PhoneNumberField
            countryCodes={countryCodes}
            number={number}
            countryCode={countryCode}
            onChangeNumber={setNumber}
            onChangeCountryCode={setCountryCode}
          />
          <br />
          <br />
          <h4>With label</h4>
          <PhoneNumberField
            countryCodes={countryCodes}
            number={number}
            countryCode={countryCode}
            onChangeNumber={setNumber}
            onChangeCountryCode={setCountryCode}
            label="Phone number"
          />
          <br />
          <br />
          <h4>With helptext</h4>
          <PhoneNumberField
            countryCodes={countryCodes}
            number={number}
            countryCode={countryCode}
            onChangeNumber={setNumber}
            onChangeCountryCode={setCountryCode}
            helpText="Help or instructions"
          />
          <br />
          <br />
          <h4>
            With <code>{'error={true}'} and helptext</code>
          </h4>
          <PhoneNumberField
            countryCodes={countryCodes}
            number={number}
            countryCode={countryCode}
            onChangeNumber={setNumber}
            onChangeCountryCode={setCountryCode}
            error={true}
            helpText="Error message"
          />
          <br />
          <br />
          <h4>
            With <code>{'maxlength={8}'} and error handling </code>
          </h4>
          <PhoneNumberField
            countryCodes={countryCodes}
            number={number}
            countryCode={countryCode}
            onChangeNumber={setNumber}
            onChangeCountryCode={setCountryCode}
            maxlength={8}
            error={error}
            helpText={error ? 'The number must contain 8 digits' : undefined}
            onBlur={checkValidations}
          />
          <br />
          <br />
          With <code>{'disabled={true}'}</code>
          <PhoneNumberField
            number=""
            countryCode=""
            countryCodes={countryCodes}
            onChangeNumber={setNumber}
            onChangeCountryCode={setCountryCode}
            disabled
          />
        </div>
      </div>
    </>
  );
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/rYnkFzvOksz738YsHGyRqa/Phone-Number-Field?node-id=2%3A2',
  },
};
