User.delete_all
Doctor.delete_all

i = 1

3.times do
  user = User.create(
    name: "user# #{i}",
    age: Faker::Number.number(digits: 2),
    disease: Faker::Emotion.noun
  )
end

3.times do
  doctor = Doctor.create(
      name: Faker::Name.name,
      position: Faker::Job.position,
      npi: Faker::Number.number(digits: 4)
  )
end