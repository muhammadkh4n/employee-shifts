class WeeksController < ApplicationController
  before_action :set_week, only: [:show, :update, :destroy]

  def index
    render json: Week.all
  end

  def show
    render json: @week
  end

  # POST /weeks
  def create
    @week = Week.new(week_params)

    if @week.save
      render json: @week
    else
      render json: @week.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /weeks/1
  def update
    if @week.update(week_params)
      render json: @week
    else
      render json: @week.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @week.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_week
      @week = Week.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def week_params
      params.require(:week).permit(
        :starting_date,
        {
          shops: [
            :name,
            {staffs: [:name, :title, {slots: []}]}
          ]
        }
      )
    end
end
