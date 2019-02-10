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
  { email: "doge@gmail.com", username: "thisisdoge", password: "dogedoge" }
].each{ |user| User.create!(user) }

User.all.each do |user|
  Channel.create!({ name: "#{user.username} channel", description: "This is #{user.username}'s ChewTube Channel!", user_id: user.id })
end
