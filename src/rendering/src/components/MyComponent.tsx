import { Text, Field, RichText } from '@sitecore-jss/sitecore-jss-nextjs';

type MyComponentProps = {
    fields: {
        heading: Field<string>,
        body: Field<string>
    };
}

const TextStyles = {
    color: '#FA8072',
    fontWeight: 'bold'
}

const TextStyles2 = {
    color: '#CD5C5C'
}

const MyComponent = (props: MyComponentProps): JSX.Element => (
    <div>
        <span style={TextStyles}><Text field={props.fields.heading} /></span>
        <RichText style={TextStyles2} field={props.fields.body} />
    </div>
);

export default MyComponent;