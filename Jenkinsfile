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
        sh '''ssh harveyd@harveyd.cloudapp.net
touch test
echo hi'''
      }
    }
  }
}