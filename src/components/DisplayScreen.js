
import React from 'react';
import { Button, Text} from "react-native";
import { DataGrid } from '@material-ui/data-grid';
import columns from '../data/header';
import rows from '../data/data';

//Display data based on given input details.
const DisplayScreen = ({ navigation, route }) => {
    return (<div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        filterModel={{
            items: [{ columnField: 'name', operatorValue: 'contains', value: route.params.fName },
            { columnField: 'pinCode', operatorValue: 'contains', value: route.params.pCode }
        ],
          }}
      />
     <Text>abc</Text>

      <Text>{route.params.fName}</Text>
      <div style={{
        flexDirection: 'column', alignItems: 'center', width:
          '100%', height: '100%'
      }}><Button fontSize='20'
        flex='0'
        margin='10'
        height='10' color='green' width='10' title="Go Back" onPress={() => navigation.navigate('Input Form')}></Button>
        <Button color='red' fontSize='20'
          flex='0'
          margin='10'
          height='10' width='50' title="Update Data" onPress={() => navigation.navigate('Input Form', { fName: route.params.fName, lName: route.params.lName, pCode: route.params.pCode })}></Button>
      </div>
    </div>
  
    )
  };
export default DisplayScreen;  