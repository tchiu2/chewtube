# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Channel.destroy_all
Video.destroy_all
Comment.destroy_all
Like.destroy_all

[
  { email: "demouser@gmail.com", username: "demouser", password: "password" },
  { email: "chewbacca@starwars.com", username: "chewie", password: "starwars" },
  { email: "t@gmail.com", username: "Terence", password: "password" },
  { email: "doge@gmail.com", username: "thisisdoge", password: "dogedoge" },
  { email: "cat@gmail.com", username: "smolcat", password: "password" }
].each { |user| User.create!(user) }

[
  { name: "Demo Channel", description: "This is demouser's ChewTube Channel. Feel free to have a look around!", user_id: User.find_by(username: "demouser").id },
  { name: "Chewbacca Rules", description: "WAGRRRRWWGAHHHHWWWRRGGAWWWWWWRR", user_id: User.find_by(username: "chewie").id },
  { name: "TC", description: "Welcome to Terence's channel", user_id: User.find_by(username: "Terence").id },
  { name: "Best Dog Videos", description: "Shibas are number 1, but other doges are cool too. This is doge.", user_id: User.find_by(username: "thisisdoge").id },
  { name: "Best Cat Videos", description: "Cats are better than dogs", user_id: User.find_by(username: "smolcat").id }
].each { |channel| Channel.create!(channel) }
