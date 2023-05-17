// import { React, useState } from "react";
// import { Navbar } from "react-bootstrap";

// function Event () {
//     const [SelectedTab, setSelectedTab] = useState('event');
//     const onSelectedTabChange = (id) => {
//         setSelectedTab(id);
//     };
//     const showSelectedContent = () => {
//         switch (SelectedTab) {
//             case 'event':
//                 return tabs[0].content;
//                 default:
//                     return tabs[0].content;
//         }
//     };

//     const tabs = [
//         {
//             id: 'event',
//             isSelected: 'Event Details',
//             onClick: () => onSelectedTabChange('event'),
//             content: (
//                 <>
//                     <EventDetails />
//                 </>
//             ),
//         }
//     ]

//     return (
//         <EuiPage paddingSize='none'>
//         <EuiFlexGroup className='eui-fullHeight'>
//         <EuiPageBody panelled>
//         <Navbar tabs={tabs} />
//         <EuiPageContent
//         hasBorder={false}
//         hasShadow={false}
//         paddingSize='none'
//         color='transparent'
//         borderRadius='none'
//         verticalPosition='center'
//         horizontalPosition='center'
//         >
//         <EuiPageBodyContentBody>{showSelectedContent()}</PageBodyContentBody>
//         <EuiSpacer size="l" />
//         </EuiPageContent>
//         </EuiPageBody>
//         </EuiFlexGroup>
//         </EuiPage>
//     )
// }
// export default Event;