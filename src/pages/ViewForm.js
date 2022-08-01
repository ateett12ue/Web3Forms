import React,{useState} from 'react'
import {useSearchParams} from 'react-router-dom'
import NoMatch from "./NoMatch"
import {Box, Checkbox} from "@chakra-ui/react"
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
const ViewForm = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    // const [checkedItems, setCheckedItems] = React.useState(
    //     data.users.map(() => false)
    //   );

    const [checkedItems, setCheckedItems] = React.useState([false, false]);
    const allChecked = checkedItems.every(Boolean);
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked;
    let formId = searchParams.get("formId");
    if(!formId)
    {
        return(
            <NoMatch/>
        )
    }
    return (
        <Box h="500px" w="100%" display="flex" flexDir="column" justifyContent="flex-start" alignItems="center">
            <Box>
                Header
            </Box>
            <Box>
            <TableContainer>
                <Table variant='simple' w={'1000px'}>
                    <Thead>
                    <Tr>
                        <Th>      
                        <Checkbox
                        colorScheme="blue"
                        isInvalid
                        cursor="pointer"
                            isChecked={allChecked}
                            isIndeterminate={isIndeterminate}
                            onChange={(e) =>
                            setCheckedItems([e.target.checked, e.target.checked])
                            }
                        >

                        </Checkbox>
                        </Th>
                        <Th>Date</Th>
                        <Th>Question 1</Th>
                        <Th>Question 2</Th>
                        <Th>Question 3</Th>
                    </Tr>
                    </Thead>
                    <Tbody bg={"pink"}>
                    <Tr justifyContent="space-evenly" alignItems={"flex-start"} onClick={()=>console.log("aaaa")}>
                        <Td>
                            <Checkbox
                                isChecked={checkedItems[0]}
                                onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
                                >
                            </Checkbox>
                        </Td>
                        <Td>22/24/32</Td>
                        <Td>Answer 1</Td>
                        <Td>Answer 2</Td>
                        <Td>Answer 3</Td>
                    </Tr>
                    <Tr justifyContent="space-evenly" alignItems={"flex-start"}>
                        <Td>
                            <Checkbox
                                isChecked={checkedItems[0]}
                                onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
                            >
                            </Checkbox>
                        </Td>
                        <Td>22/24/32</Td>
                        <Td>Answer 1</Td>
                        <Td>Answer 2</Td>
                        <Td>Answer 3</Td>
                    </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            </Box>
            <Box>
                Footer with Submit button 
            </Box>
            
        </Box>
    )
}

export default ViewForm





// import React from "react";
// import { Checkbox, Stack } from "@chakra-ui/react";

// const data = {
//   users: [
//     { id: "user-1", name: "User 1" },
//     { id: "user-2", name: "User 2" },
//     { id: "user-3", name: "User 3" },
//     { id: "user-4", name: "User 4" },
//     { id: "user-5", name: "User 5" },
//     { id: "user-6", name: "User 6" },
//     { id: "user-7", name: "User 7" },
//     { id: "user-8", name: "User 8" }
//   ]
// };

// export default function App() {
//   const [checkedItems, setCheckedItems] = React.useState(
//     data.users.map(() => false)
//   );

//   const allChecked = checkedItems.every(Boolean);
//   const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

//   return (
//     <Stack pt={3} pl={3}>
//       <Checkbox
//         isChecked={allChecked}
//         isIndeterminate={isIndeterminate}
//         onChange={(e) =>
//           setCheckedItems(data.users.map(() => e.target.checked))
//         }
//       >
//         Parent Checkbox
//       </Checkbox>

//       <Stack pl={6} spacing={1}>
//         {data.users.map((user, index) => (
//           <Checkbox
//             key={user.id}
//             isChecked={checkedItems[index]}
//             onChange={(e) =>
//               setCheckedItems([
//                 ...checkedItems.slice(0, index),
//                 e.target.checked,
//                 ...checkedItems.slice(index + 1)
//               ])
//             }
//           >
//             {user.name}
//           </Checkbox>
//         ))}
//       </Stack>
//     </Stack>
//   );
// }
