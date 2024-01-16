import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AdmissionIcon from '@mui/icons-material/Book';
import ClassIcon from '@mui/icons-material/Class';
import UsersIcon from '@mui/icons-material/People';
import StudentEvaluationIcon from '@mui/icons-material/AssignmentInd';
import HomeworkIcon from '@mui/icons-material/LibraryBooks';
import AttendanceIcon from '@mui/icons-material/EventAvailable';
import PaymentIcon from '@mui/icons-material/Payment';
import ReportsIcon from '@mui/icons-material/BarChart';
import NotificationIcon from '@mui/icons-material/Notifications';
import SystemSettingsIcon from '@mui/icons-material/Settings';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ExamHallList from '../../Pages/ExamHallList';
import ExamHallReceipt from '../../Pages/ExamHallReceipt';
import ExamRelated from './ExamRelated';
import Report from '../Report/Report'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



const drawerWidth = 240;

export default function Navbar() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: 'white',
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" style={{ color: 'gray', display: 'flex', alignItems: 'center' }}>
            Exam Hall
            <IconButton style={{ color: '#7F00FF' }} aria-label="add">
              <AddBoxIcon />
            </IconButton>
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton style={{ color: 'gray' }} aria-label="settings">
            <SettingsIcon />
          </IconButton>
          <IconButton style={{ color: 'gray' }} aria-label="notifications">
            <NotificationsIcon />
          </IconButton>
          <IconButton style={{ color: 'gray' }} aria-label="account">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#7F00FF', // Set the background color for the sidebar
          },
          '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
            color: 'white', // Set the color for both icon and text
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <h3>WP SCHOOL</h3>
        <h6>MANAGEMENT SYSTEM</h6>
        <Divider />
        <List>
          {[
            { text: 'Dashboard', icon: <DashboardIcon /> },
            { text: 'Admission', icon: <AdmissionIcon /> },
            { text: 'Class', icon: <ClassIcon /> },
            { text: 'Users', icon: <UsersIcon /> },
            { text: 'Student Evaluation', icon: <StudentEvaluationIcon /> },
            { text: 'Homework', icon: <HomeworkIcon /> },
            { text: 'Attendance', icon: <AttendanceIcon /> },
            { text: 'Payment', icon: <PaymentIcon /> },
            { text: 'Reports', icon: <ReportsIcon /> },
            { text: 'Notification', icon: <NotificationIcon /> },
            { text: 'System Settings', icon: <SystemSettingsIcon /> },
          ].map(({ text, icon }, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
          <ExamRelated />
           
        </Typography>
        <Typography paragraph>
          {/* More content goes here */}
        </Typography>
      </Box>
    </Box>
  );
}
