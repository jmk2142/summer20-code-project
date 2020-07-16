<template>
  
  <!-- task creation form -->
  <v-row justify="start">
    <v-col>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          + Create
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Create a Task</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Task Name*" v-model="taskName" required></v-text-field>
              </v-col>
    
              <v-col cols="12">
                <v-text-field label="Details*"  v-model="taskDetail" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-menu
          ref="menu1"
          v-model="menu1"
          transition="scale-transition"
          max-width="290px"
          min-width="290px"
        >
  
        <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dateFormatted"
              label="Due Date*"
              hint="MM/DD/YYYY format"
              persistent-hint
        
              v-bind="attrs"
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
           </v-menu>
           <!-- <p>Date in ISO format: <strong>{{ date }}</strong></p> -->
      
          </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="createTask">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-col>


<!-- tasks -->

    <v-col v-for="(task, i) in tasks"
          :key="i"
          cols="12"
          >
      <v-card
            color="white"
          >
          <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="task.name"
                >{{task.name}}</v-card-title>
                <v-card-subtitle v-text="task.details">{{task.details}}</v-card-subtitle>
                <v-card-subtitle v-text="task.due">{{task.due}}</v-card-subtitle>
              </div>
              <v-btn text @click="deleteTask">
            Delete
           </v-btn>
              </div>
      </v-card>
    </v-col>
  </v-row>


  
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDXkh_M7XtCg9_p14_rRmatoiTSOomD_nU",
  authDomain: "su20-dd823.firebaseapp.com",
  databaseURL: "https://su20-dd823.firebaseio.com",
  projectId: "su20-dd823",
  storageBucket: "su20-dd823.appspot.com",
  messagingSenderId: "32935803031",
  appId: "1:32935803031:web:8af06353eda7564afe91d2",
  measurementId: "G-VQZNCD7JRD"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const tasksRef = db.collection('tasks')


  export default {
    data: vm => ({
      taskName:"",
      taskDetail:"",
      tasks:[],
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      dialog: false
    }),

    computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },

  watch: {
      date () {
        this.dateFormatted = this.formatDate(this.date)
      },
    },

    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
      readTasks () {
      tasksRef.get().then(snapshot => {
        var tasks = [];
        snapshot.forEach(doc => {
          tasks.push(doc.data());
        });
        this.tasks = tasks;
      })
    },
      createTask () {
        let id = tasksRef.doc().id
        tasksRef.doc(id).set({
        id: id,
        name: this.taskName,
        details: this.taskDetail,
        due: this.date,
      });
      
      this.taskName = ""
      this.taskDetail = ""
      this.date = ""
      this.readTaskss();
      this.dialog = false; 
      },

      deleteTask (id) {
      tasksRef.doc(id).delete();
      this.readTasks();
      }
    },

mounted() {
    this.readTasks();
    }
  }
  
</script>