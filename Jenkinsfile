docker.image('maven:3.3.3-jdk-8').inside {
  git 'https://github.com/MathiasVE/jhipster-demo'
  stage 'Install'
  sh 'mvn -B clean install'
  stage 'Test'
  sh 'mvn -B clean test'
  stage 'Test'
  sh 'mvn -B clean test'
}