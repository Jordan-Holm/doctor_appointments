class Api::DoctorsController < ApplicationController

  def index
    render json: Doctor.all
  end

  def show
    @doctor =Doctor.find(params[:id])
    render json: @doctor
  end

  def create
    @doctor = Doctor.new(doctor_params)
    if @doctor.save
      render json: @doctor
    else
      render json: { errors: @doctor.errors }, status: :unprocessable_entity
    end
  end

  def update
    @doctor = Doctor.find(params[:id])
    if @doctor.update(doctor_params)
      render json: @doctor
    else
      render json: { errors: @doctor.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @doctor = Doctor.find(params[:id])
    @doctor.destroy
    render json: { message: 'doctor deleted' }
  end

  private
    def doctor_params
      params.require(:doctor).permit(:name, :position, :npi)
    end


end
