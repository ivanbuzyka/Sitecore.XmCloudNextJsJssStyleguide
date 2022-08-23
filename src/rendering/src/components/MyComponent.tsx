import { Text, RichText, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type MyComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
    body: Field<string>;
  };
};

const MyComponent = ({ fields }: MyComponentProps): JSX.Element => (
  <div className="myComponent">
    <Text tag="h2" className="myComponentTitle" field={fields.heading} />

    <RichText className="contentDescription" field={fields.body} />
  </div>
);

export default withDatasourceCheck()<MyComponentProps>(MyComponent);
