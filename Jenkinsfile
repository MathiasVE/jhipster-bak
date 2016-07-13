node {
  stage 'fetch code'
  git 'https://github.com/MathiasVE/jhipster-demo'
  def maven = docker.image('maven:3.3.3-jdk-8')
  maven.pull()
  maven.inside {
    stage 'Install'
    sh 'mvn -B clean install'
    stage 'Test'
    sh 'mvn -B test'
    stage 'Build docker image'
    if(env.BRANCH_NAME == "development") {
      sh './mvnw package -Pdev docker:build'
    } else {
      sh './mvnw package -Pprod docker:build'
    }
  }
  stage 'Deploy'
  if(env.BRANCH_NAME == "development") {
    sh 'sed -i "s/8080:8080/5000:8080/g" src/main/docker/app.yml'
    sh 'sed -i "s/5432:5432/5001:5432/g" src/main/docker/postgresql.yml'
  } else if (env.BRANCH_NAME == "testing") {
    sh 'sed -i "s/8080:8080/5100:8080/g" src/main/docker/app.yml'
    sh 'sed -i "s/5432:5432/5101:5432/g" src/main/docker/postgresql.yml'
  } else {
    sh 'sed -i "s/8080:8080/80:8080/g" src/main/docker/app.yml'
  }
  if(env.BRANCH_NAME != "master") {
    sh "docker-compose -p app_${env.BRANCH_NAME} -f src/main/docker/app.yml up -d"
  }
}
