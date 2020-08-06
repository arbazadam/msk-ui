/* 🙋‍♂️ Explaination
*************************************************************************
This file declares all the properties that will be passed to the variant
when it is rendered in the editor.

'msk-property-types' | Declares different types of proprties supported.

'msk-themes' | Declares different themes supported.
*************************************************************************
*/

/* ✅ RULES & BEST PRACTICES
*************************************************************************
Please follow these rules if you want your component to go LIVE.

1. Every object {} is a property.
2. Objects can contain arrays and nested objects.
3. A defaule 'value' should be given. If you are not sure, give the 'Lorem ipsum dolor' text.
4. The 'required' field indicates if the property is mandatory to be filled by the user to render the variant.
5. DO NOT use custom colors  / hex codes  for theme.
6. Use ONLY the property types supported in 'msk-property-types'
7. Make sure property keys are unique.
8. All fields are mandatory.
9. Each property {} can contain ONLY the below fields,
 - type
 - value
 - name
 - required
*************************************************************************
*/

/* 👨‍💻 Your code starts below.
*************************************************************************
Happy coding.
*************************************************************************/


import propertyTypes from 'msk-property-types'
import themes from 'msk-themes'

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.light.skyBlue,
    required: true
  },
  companyName: {
    name: 'Company Name',
    type: propertyTypes.STRING,
    value: 'MSK-DOCUMENTS',
    required: true
  },
  tagline: {
    name: 'Tagline',
    type: propertyTypes.STRING,
    value: 'tagline',
    required: false
  }
}
export default properties;