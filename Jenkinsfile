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
        sh 'cat test | ssh harveyd.cloudapp.net'
      }
    }
  }
}