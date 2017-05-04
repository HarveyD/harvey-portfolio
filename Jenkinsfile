pipeline {
  agent any
  stages {
    stage('Tests') {
      steps {
        echo 'Testing'
      }
    }
    stage('Deploy') {
      steps {
        sshagent(['da3c3afa-ab14-4abf-88ff-d02d3e3571cf']){
          sh 'ssh -vv -oStrictHostKeyChecking=no harveyd@harveyd.cloudapp.net uname -a
          cat test'
        }
      }
    }
  }
}