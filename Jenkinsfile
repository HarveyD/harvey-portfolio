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
        sshagent(['harveyd']){
          sh 'ssh -vv -oStrictHostKeyChecking=no harveyd@harveyd.cloudapp.net uname -a'
        }
      }
    }
  }
}